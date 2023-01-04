/*
Brit Notes:


name, contact, yrs exp, clients array, number of clients(maybe a gql calc), gym number ? aka located gym, 

trainer type array ( ie. strength, weight loss, muscle building)



*/

const { Schema, model } = require('mongoose');

const trainerSchema = new Schema(
    {
        name: {
            //
        },
        contact: {
            //
        }
    }
);



const Trainer = model('Trainer', trainerSchema);

module.exports = Trainer;