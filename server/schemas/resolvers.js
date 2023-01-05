const {Workout} = require('../models');

const resolvers={
    Query: {
        helloWorld: () => {
          return 'Hello world!';
        }
      }
};

module.exports = resolvers;

/* Mutation:{
        addWorkout: async (parent,{workoutName})=>{
            const workout = await Workout.create({workoutName});

            return workout;
        }
    }*/