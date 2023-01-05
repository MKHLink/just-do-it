const {Workout} = require('../models');

const resolvers={
    Mutation:{
        addWorkout: async (parent,{workoutName})=>{
            const workout = await Workout.create({workoutName});

            return workout;
        }
    }
};

module.exports = resolvers;