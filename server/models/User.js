const { Schema, model } = require('mongoose');

const userSchema = new Schema(
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
        age: {
            type: Number
        },
        trainer: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Trainer'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// Number of completed workouts
userSchema.virtual('workoutCount').get(function() {
    return this.workouts.length;
});

const User = model('User', userSchema);

module.exports = User;
