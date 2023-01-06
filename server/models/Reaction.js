const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        user: {
            // insert user
        },
        comment: {
            type: String
        },
        reactionType: {
            // thumbs up, down, heart, crushed it
        }
    }
);

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;