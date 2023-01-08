const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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

trainerSchema.pre('save',async function(next){
    if(this.isNew||this.isModified('password')){
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password,saltRounds);
    }
    next();
});

trainerSchema.methods.isCorrectPassword = async function(password){
    return bcrypt.compare(password,this.password);
}

const Trainer = model('Trainer', trainerSchema);

module.exports = Trainer;