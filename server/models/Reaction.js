const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        comment: {
            type: String
        },
        reactionType: {
            type: String // thumbs up, down, heart, crushed it
        }
    }
);

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;