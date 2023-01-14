const {User, Workout, Gym, Reaction } = require('../models/index');
const { AuthenticationError } = require('apollo-server-express');
const {signToken} = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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
        },

        donate: async(parent,args, context)=>{
          const url = new URL(context.headers.referer).origin;;
          const session = await stripe.checkout.sessions.create({
            line_items: [
              {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: 'Donation',
                  },
                  unit_amount: 1000,
                },
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${url}/`
          });

          return {session: session.id};
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
      },

      deleteWorkout: async(parent, {workoutId},context)=>{
        if(context.user){
          const deletedWorkout = await Workout.findOneAndDelete(
            {_id: workoutId}
          );
          return deletedWorkout;
        }
        throw new AuthenticationError('User not logged in');
      },

      editWorkout: async(parent, args,context)=>{
        if(context.user){
          const editedWorkout = await Workout.findOneAndUpdate(
            {_id: args.workoutId},
            {...args},
            {new:true}
          );
          return editedWorkout;
        }
        throw new AuthenticationError('User not logged in');
      }
    }
};

module.exports = resolvers;

