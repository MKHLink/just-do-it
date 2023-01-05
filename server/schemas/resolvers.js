const {User} = require('../models/index');

const resolvers={
    Query: {
        helloWorld: () => {
          return 'Hello world!';
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

