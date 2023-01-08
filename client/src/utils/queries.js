import { gql } from "@apollo/client";

export const GET_WORKOUTS = gql`
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
