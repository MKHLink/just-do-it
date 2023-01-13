import { useQuery, useMutation } from "@apollo/client";
import { GET_WORKOUTS } from "../utils/queries";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { DELETE_WORKOUT } from "../utils/mutations";

function WorkoutList() {
  const { data,loading } = useQuery(GET_WORKOUTS);
  const workouts = data?.getWorkouts || [];

  const [deletedWorkout, {error}] = useMutation(DELETE_WORKOUT);

const handleDelete = async(workoutId)=>{
  
  try{
    const {data} = await deletedWorkout({
      variables: {workoutId}
    });

    console.log("Deleted "+ workoutId );
    console.log(data);
  }catch(err){
    console.log(err);
  }

  
};
 

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
          
          <Button variant="primary" size="sm">
            Edit
          </Button>{' '}

          <Button variant="danger" size="sm"
            onClick={()=>handleDelete(workout._id)}>
            Delete
          </Button>

        </Card.Body>
        </Card>
        );
      })}
      </div>
    </main>
  )
};

export default WorkoutList;


