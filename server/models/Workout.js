const { Schema, model } = require('mongoose');

const workoutSchema = new Schema (
    {
        createdAt: {
            // defualt now
            type: Date,
            default: Date.now
        },
        workoutName: {
            type: String
        },
        workoutType: {
            type: String
        }, //'Bench', 'Back', 'Legs', 'Shoulders', 'Arms', 'Abs', 'Cardio', 'Other'
        calsBurned: {
            type: Number,
            min: [0, 'Must be at least 0 calories burned! You put {VALUE}']
        },
        time: {
            type: String
        },
        notes: {
            type: String     // What exercises did you do
        },
        gymLocation: {
            type: String    // coincides with the gym model
        }
    }
);

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
