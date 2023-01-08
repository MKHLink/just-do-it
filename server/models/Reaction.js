const { Schema} = require('mongoose');

const reactionSchema = new Schema(
    {
        comment: {
            type: String,
            maxlength: 200
        },
        reactionType: {
            type: String,
            enum:['like','dislike'],
            default: 'null'
        },
        createdAt:{
            type: Date,
            default: Date.now,
        },
        username:{
            type: String,
            required: true
        }
    },
    {
        toJSON:{
            getters: true
        }
    }
);

module.exports = reactionSchema;