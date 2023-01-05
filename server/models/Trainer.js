/*
Brit Notes:

number of clients(maybe a gql calc), gym number ? aka located gym, 

*/

const { Schema, model } = require('mongoose');

const trainerSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        firstName: {    
            type: String
        },
        lastName: {
            type: String
        },
        yearsExp : {
            type: Number
        },
        trainees: [
            // Insert users that have this trainer
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
);



const Trainer = model('Trainer', trainerSchema);

module.exports = Trainer;