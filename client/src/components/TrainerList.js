 import { useQuery } from "@apollo/client";
 import { TRAINERS } from "../utils/queries";
 import { GET_ME } from "../utils/queries";
 import Auth from '../utils/auth';
 import Card from 'react-bootstrap/Card';

function TrainerList() {
  const {data,loading} = useQuery(GET_ME);

  const user = data?.me || {};
  
  console.log(user);
  if(loading){
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Card  style={{ width: '18rem' }}>
        <Card.Body className="workoutList">
          <Card.Title>{user.firstName} {user.lastName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
          <Card.Text>{user.Age}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.gym}</Card.Text>
          <Card.Text>{user.expLevel}</Card.Text>
          {user.workouts && user.workouts.map(workout =>{
            return(
              <Card.Body key = {user.workouts._id}>
                <Card.Body>
                  <Card.Text>_______________________________</Card.Text>
                  <Card.Title>Workout Name: {workout.workoutName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">User: {workout.username}</Card.Subtitle>
                  <Card.Text>Workout Type: {workout.workoutType}</Card.Text>
                  <Card.Text>Calories Burned: {workout.calsBurned}</Card.Text>
                  <Card.Text>Workout Duration: {workout.time}</Card.Text>
                  <Card.Text>Fitness Tips: {workout.notes}</Card.Text>
                  </Card.Body>
              </Card.Body>
            );
          })}
        </Card.Body>
        </Card>
    </main>
  )
};

export default TrainerList;