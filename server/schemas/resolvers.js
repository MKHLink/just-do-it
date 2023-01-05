const {User, Trainer} = require('../models/index');
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
          .populate('trainer')
        },

        getTrainers: async()=>{
          return Trainer.find()
          .select('-__V -password')
          .populate('trainees')
        }
      },

    Mutation:{
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
      
        return {token,user};
      },

      addTrainer: async (parent, args) => {
        const user = await Trainer.create(args);
        const token = signToken(user);
      
        return {token,user};
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

      //login route for trainer accounts
      trainerLogin: async(parent, {email,password})=>{
        const user = await Trainer.findOne({email});

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

