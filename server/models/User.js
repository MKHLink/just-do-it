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
        level: {
            // CHOICES: Beginner, Intermediate, Expert
            type: String
        },
        followers: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        trainer: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Trainer'
            }
        ],
        workouts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Workout'
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
