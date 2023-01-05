const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Query {
  helloWorld: String
}
`;

module.exports = typeDefs;

/*
 type Workout{
        user: String
        createdAt: String
        workoutName: String
        workoutType: [String]
        time: String
    }
    type Mutation{
        addWorkout:(workoutName: String!): Workout 
    } */