/*
Brit Notes:

user, password, email, age, exp level, followers

*/

const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            //
        },
        email: {
            //
        }
    }
);

const User = model('User', userSchema);

module.exports = User;
