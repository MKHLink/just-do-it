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
mutation AddUser($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!, $age: Int!, $status: String!, $expLevel: String!, $gym: String!) {
  addUser(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName, age: $age, status: $status, expLevel: $expLevel, gym: $gym) {
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