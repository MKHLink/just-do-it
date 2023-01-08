import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation AddUser(
    $username: String!
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $status: String!
    $expLevel: String!
    $gym: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      status: $status
      expLevel: $expLevel
      gym: $gym
    ) {
      user {
        lastName
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
    }
  }
`;

export const WORKOUT = gql`
  mutation AddWorkout(
    $workoutName: String!
    $workoutType: String!
    $calsBurned: String
    $time: String
    $notes: String
  ) {
    addWorkout(
      workoutName: $workoutName
      workoutType: $workoutType
      calsBurned: $calsBurned
      time: $time
      notes: $notes
    ) {
      username
      workoutName
      workoutType
      calsBurned
      time
      createdAt
      notes
    }
  }
`;

export const WORKOUTS = gql`
  query GetWorkouts {
    getWorkouts {
      workoutName
      workoutType
      notes
      calsBurned
      time
    }
  }
`;
