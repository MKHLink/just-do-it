const {User, Trainer} = require('../models/index');
const { AuthenticationError } = require('apollo-server-express');

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
      
        return user;
      },

      addTrainer: async (parent, args) => {
        const user = await Trainer.create(args);
      
        return user;
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

        return user;
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

        return user;
      }

    }
};

module.exports = resolvers;

