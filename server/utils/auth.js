const jwt = require('jsonwebtoken');

const secret = 'rippedoffappnamefromnike';
const expiration = '1h';

module.exports = {
    //this function takes the user email,id and username and return them as a json web token
    signToken: function({username,email, _id}){
        const payload = {username,email,_id};

        return jwt.sign({data:payload},secret,{expiresIn:expiration});
    }
};