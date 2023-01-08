const {User, Workout, Gym, Reaction } = require('../models/index');
const { AuthenticationError } = require('apollo-server-express');
const {signToken} = require('../utils/auth');

const resolvers={
    Query: {
        helloWorld: () => {
          return 'Hello world!';
        },

        getUsers: async()=>{
          return User.find()
          .select('-__V -password')
          .populate('workouts')
        },

        getWorkouts: async(parent, {username})=>{
          const params = username?{username}: {};
          return Workout.find(params).sort({createdAt:-1});
        },

        getWorkoutsByType: async ( parent, { workoutType }) => {
          return Workout.find({workoutType})
        },

         //a function to reterive the logged in user's profile
         me: async(parent,args,context)=>{
          if(context.user){
            const user = await User.findOne({_id:context.user._id})
            .select('-__v -password')
            .populate('workouts');

            return user;
          }
          throw new AuthenticationError('User not logged in');
        }
      },

    Mutation:{
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
      
        return {token,user};
      },

      addWorkout: async (parent, args, context) => {
          if (context.user) {
            const workout = await Workout.create({...args, username: context.user.username});

            await User.findByIdAndUpdate(
              {_id:context.user._id},
              {$push: {workouts: workout._id}},
              {new: true}
            );

            return workout;
          }

          throw new AuthenticationError('User not logged in');
        },

      //login route for user accounts
      userLogin: async(parent, {email,password})=>{
        const user = await User.findOne({email});

        if(!user){
          throw new AuthenticationError('User not found');
        }

        const correctPassword = await user.isCorrectPassword(password);

        if(!correctPassword){
          throw new AuthenticationError('User not found');
        }

        const token = signToken(user);
        return { token, user };
      },

      reactTo: async(parent,{workoutId,reactionType,comment},context)=>{
        if(context.user){
          const updatedWorkout = await Workout.findOneAndUpdate(
            {_id:workoutId},
            {$push: {reactions: {reactionType, comment, username: context.user.username}}},
            {new: true, runValidators:true}
          );
          return updatedWorkout;
        }
        throw new AuthenticationError('User not logged in');
      }
    }
};

module.exports = resolvers;