const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Trainer{
  _id:ID
  username: String
  email: String
  firstName:String
  lastName:String
  yearsExp: Int
  trainees: [User]
}

type User{
  _id:ID
  username: String
  email: String
  firstName:String
  lastName:String
  age: Int
  trainer: [Trainer]
}

type Query {
  helloWorld: String
  getUsers: [User]
  getTrainers: [Trainer]
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): User
  addTrainer(username: String!, email: String!, password: String!): Trainer
  userLogin(email: String!, password: String!):User
  trainerLogin(email: String!,password: String!):Trainer
}
`;

module.exports = typeDefs;

