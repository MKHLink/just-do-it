const { Schema, model } = require('mongoose');

const gymSchema = new Schema(
    {
        burrough: {
            type: String     // [ 5 burr]
        },
    }
);



const Gym = model('Gym', gymSchema);

module.exports = Gym;

