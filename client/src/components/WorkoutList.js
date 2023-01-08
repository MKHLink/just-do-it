// import { useQuery } from '@apollo/client';
// // import { Link } from 'react-router-dom';
// import { WORKOUTS } from '../utils/queries';

import { useQuery } from "@apollo/client";
import { GET_WORKOUTS } from "../utils/queries";

function WorkoutList() {
  const { data } = useQuery(GET_WORKOUTS)


  console.log('workouts', data)

  return (
    <div><h5>This is a list of your existing workouts:</h5>

    {/* When we can add a workout, this needs to be uncommented out
    {data.getWorkouts.map(workout => (
      {workout}
    ))} */}

    </div>
  )
};

export default WorkoutList;