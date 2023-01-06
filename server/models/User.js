const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
        status: {
            type: String        // Trainer or Trainee
        },
        expLevel: {
            type: String        // Beginner, Intermediate, Expert
        },
        workouts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Workout'
            }
        ],
        gym: {
            // related to the Gym Model
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

//hasing user password using middleware
userSchema.pre('save',async function(next){
    if(this.isNew||this.isModified('password')){
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password,saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function(password){
    return bcrypt.compare(password,this.password);
}

// Number of completed workouts
userSchema.virtual('workoutCount').get(function() {
    return this.workouts.length;
});

const User = model('User', userSchema);

module.exports = User;
