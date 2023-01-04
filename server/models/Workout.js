const { Schema, model } = require('mongoose');

const workoutSchema = new Schema (
    {
        user: {
            // INSERT USER 
        },
        createdAt: {
            // defualt now
            type: Date,
            default: Date.now
        },
        workoutName: {
            type: String
        },
        workoutType: [], //'Bench', 'Back', 'Legs', 'Shoulders', 'Arms', 'Abs', 'Cardio', 'Other'
        calsBurned: {
            type: Number,
            min: [0, 'Must be at least 0 calories burned! You put {VALUE}']
        },
        time: {
            type: String
        },
        notes: {
            type: String
        }
    }
);

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
