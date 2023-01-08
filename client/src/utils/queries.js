import { gql } from "@apollo/client";

export const GET_WORKOUTS = gql`
query GetWorkouts($username: String) {
  getWorkouts(username: $username) {
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
      reactionType
      comment
      username
    }
    reactionCount
  }
}
`;

export const GET_ME = gql`
query Me {
  me {
    _id
    username
    email
    firstName
    lastName
    age
    status
    expLevel
    workouts {
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
    gym
  }
}
`;
