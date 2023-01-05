const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Workout{
        user: String
        createdAt: String
        workoutName: String
        workoutType: [String]
        time: String
    }

    type Mutation{
        addWorkout:(workoutName: String!): Workout 
    }
`;

module.exports = typeDefs;