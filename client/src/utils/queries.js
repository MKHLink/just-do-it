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

export const GET_WORKOUT_TYPE_CHEST = gql `
query{
  getWorkoutsByType(workoutType: "chest") {
    workoutName
    notes
    gymLocation
    createdAt
    calsBurned
    time
    workoutType
  }
}
`;

export const GET_WORKOUT_TYPE_BACK = gql `
query{
  getWorkoutsByType(workoutType: "back") {
    workoutName
    notes
    gymLocation
    createdAt
    calsBurned
    time
    workoutType
  }
}
`;

export const GET_WORKOUT_TYPE_LEGS = gql `
query{
  getWorkoutsByType(workoutType: "legs") {
    workoutName
    notes
    gymLocation
    createdAt
    calsBurned
    time
    workoutType
  }
}
`;

export const GET_WORKOUT_TYPE_SHOULDERS = gql `
query{
  getWorkoutsByType(workoutType: "legs") {
    workoutName
    notes
    gymLocation
    createdAt
    calsBurned
    time
    workoutType
  }
}
`;

export const GET_WORKOUT_TYPE_ABS = gql `
query{
  getWorkoutsByType(workoutType: "abs") {
    workoutName
    notes
    gymLocation
    createdAt
    calsBurned
    time
    workoutType
  }
}
`;