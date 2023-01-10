import { useQuery } from "@apollo/client";
import { GET_WORKOUT_TYPE_LEGS } from "../utils/queries";
import Card from 'react-bootstrap/Card';

function WorkoutLegs() {
  const { data,loading } = useQuery(GET_WORKOUT_TYPE_LEGS);
  const workouts = data?.getWorkoutsByType || [];

  return (
    <main>
      { console.log( workouts)}
      <div className="workoutList">
      {workouts && workouts.map(workout=>{
        return(
          <Card  key={workout._id} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Workout Name: {workout.workoutName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">User: {workout.username}</Card.Subtitle>
          <Card.Text>Workout Type: {workout.workoutType}</Card.Text>
          <Card.Text>Calories Burned: {workout.calsBurned}</Card.Text>
          <Card.Text>Workout Duration: {workout.time}</Card.Text>
          <Card.Text>Fitness Tips: {workout.notes}</Card.Text>
          <Card.Text>_______________________________</Card.Text>
        </Card.Body>
        </Card>
        );
      })}
      </div>
    </main>
  )
};

export default WorkoutLegs;