import { useQuery } from "@apollo/client";
import { GET_WORKOUTS } from "../utils/queries";

function WorkoutList() {
  const { data,loading } = useQuery(GET_WORKOUTS);
  const workouts = data?.getWorkouts || [];


 

  return (
    <main>
      <div>
      { console.log( workouts)}
        {workouts && workouts.map(workout=>{
          return(<div key={workout._id}>
            <h4>Username: {workout.username}</h4>
            <h4>Workout Name: {workout.workoutName}</h4>
            <h4>Workout Type: {workout.workoutType}</h4>
            <h5>Calories Burned: {workout.calsBurned}</h5>
            <h5>Workout Duration: {workout.time}</h5>
            <p>Fitness Notes: {workout.notes}</p>
          </div>);
        })}
      </div>
    </main>
  )
};

export default WorkoutList;