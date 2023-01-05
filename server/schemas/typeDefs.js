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
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): User
  addTrainer(username: String!, email: String!, password: String!): Trainer
}
`;

module.exports = typeDefs;

