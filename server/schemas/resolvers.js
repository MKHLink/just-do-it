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

        getWorkouts: async()=>{
          return Workout.find()
        },

        getWorkoutsByType: async ( parent, { workoutType }) => {
          return Workout.find({workoutType})
        },

         //a function to reterive the logged in user's profile
         me: async(parent,args,context)=>{
          if(context.user){
            const user = await User.findOne({_id:context.user._id})
            .select('-__v -password')
            .populate('trainer');

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
          if(context.user){
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
      }
    }
};

module.exports = resolvers;

