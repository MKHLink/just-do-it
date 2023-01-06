const {gql} = require('apollo-server-express');

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
  workoutType: String
  calsBurned: String
  time: String
  notes: String
  gymLocation: String
}

type Gym {
  _id: ID
  burrough: String
}

type Reaction {
  _id: ID
  comment: String
  reactionType: String
}

type Query {
  helloWorld: String
  getUsers: [User]
  getWorkouts: [Workout]
  getWorkoutsByType(workoutType: String!): [Workout]
  getTrainers(status: String!): [User]
}

type Mutation {
  addWorkout(workoutName: String!, workoutType: String!, calsBurned: String!, time: String!, notes: String!, gymLocation!)
}
`;

module.exports = typeDefs;

