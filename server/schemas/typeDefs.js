const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    firstName: String
    lastName: String
    age: Int
    status: String
    expLevel: String
    workouts: [Workout]
    gym: String
  }
  type Workout {
    _id: ID
    createdAt: String
    workoutName: String
    username: String
    workoutType: String
    calsBurned: String
    time: String
    notes: String
    gymLocation: String
    reactions: [Reaction]
    reactionCount: Int
  }
  type Gym {
    _id: ID
    burrough: String
  }
  type Reaction {
    _id: ID
    comment: String
    reactionType: String
    username: String
  }
  type Query {
    helloWorld: String
    me: User
    getUsers: [User]
    getWorkouts(username: String): [Workout]
    getWorkoutsByType(workoutType: String!): [Workout]
    getTrainers(status: String!): [User]
  }
  type Mutation {
    addWorkout(
      workoutName: String!
      workoutType: String!
      calsBurned: String
      time: String
      notes: String
      gymLocation: String
    ): Workout
    addUser(
      username: String!
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      age: Int
      status: String!
      expLevel: String!
      gym: String!
    ): Auth
    userLogin(email: String!, password: String!): Auth
    reactTo(workoutId: ID!, reactionType: String, comment: String): Workout
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
