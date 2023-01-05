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
  me: User
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  addTrainer(username: String!, email: String!, password: String!): Auth
  userLogin(email: String!, password: String!):Auth
  trainerLogin(email: String!,password: String!):Auth
}

type Auth{
  token: ID!
  user:User
  trainer:Trainer
}
`;

module.exports = typeDefs;

