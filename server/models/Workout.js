/*
Brit Notes:


calories burned, workout type, workout time, trainer (ref trainer)
workout friend ( ref another friend )

*/

const { Schema, model } = require('mongoose');

const workoutSchema = new Schema (
    {
        workout: {
            //
        },
        cals: {
            //
        },
        time: {
            //
        }
    }
);

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
