/*
Brit Notes:


gym, size, burrow location


*/

const { Schema, model } = require('mongoose');

const gymSchema = new Schema(
    {
        name: {
            //
        },
        burrough: {
            //
        },
    }
);



const Gym = model('Gym', gymSchema);

module.exports = Gym;

