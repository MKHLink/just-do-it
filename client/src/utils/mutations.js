import {gql} from '@apollo/client';

export const ADD_WORKOUT = gql`
mutation AddWorkout($workoutName: String!, $workoutType: String!, $calsBurned: String, $time: String, $notes: String, $gymLocation: String) {
  addWorkout(workoutName: $workoutName, workoutType: $workoutType, calsBurned: $calsBurned, time: $time, notes: $notes, gymLocation: $gymLocation) {
    _id
    createdAt
    workoutName
    username
    workoutType
    calsBurned
    time
    notes
    gymLocation
    reactions {
      _id
      comment
      reactionType
      username
    }
    reactionCount
  }
}
`;

export const LOGIN = gql`
mutation UserLogin($email: String!, $password: String!) {
  userLogin(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      firstName
      lastName
      age
      status
      expLevel
      workouts {
        gymLocation
        _id
        createdAt
        workoutName
        username
        workoutType
        calsBurned
        time
        notes
        reactions {
          _id
          comment
          reactionType
          username
        }
        reactionCount
      }
      gym
    }
  }
}
`;

export const SIGNUP = gql`
mutation AddUser($username: String!, $password: String!, $email: String!, $firstName: String, $lastName: String, $age: Int, $status: String, $expLevel: String, $gym: String) {
  addUser(username: $username, password: $password, email: $email, firstName: $firstName, lastName: $lastName, age: $age, status: $status, expLevel: $expLevel, gym: $gym) {
    token
    user {
      _id
      username
      email
      firstName
      lastName
      age
      status
      expLevel
      gym
    }
  }
}
`;

export const DELETE_WORKOUT = gql`
mutation DeleteWorkout($workoutId: ID!) {
  deleteWorkout(workoutId: $workoutId) {
    _id
    createdAt
    workoutName
    username
  }
}
`;