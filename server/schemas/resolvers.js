const {User} = require('../models/index');

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
          return User.find()
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
        const user = await User.create(args);
      
        return user;
      },
    }
};

module.exports = resolvers;

