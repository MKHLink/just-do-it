import React, {useState} from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { GET_WORKOUTS } from "../utils/queries";
import {Card, Button, Modal} from 'react-bootstrap';
import { DELETE_WORKOUT } from "../utils/mutations";

function WorkoutList() {
  const { data,loading } = useQuery(GET_WORKOUTS);
  const workouts = data?.getWorkouts || [];

  const [showModal, setShowModal] = useState(false);

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

const [formState, setFormState] = useState({
  workoutName: "",
  workoutType: "",
  calsBurned: "",
  time: "",
  notes: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormState({
    ...formState,
    [name]: value,
  });
};

const handleEdit = async(workoutId)=>{
  console.log(workoutId);
}
 

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
          
          <Button variant="primary" size="sm"
            onClick={()=>{setShowModal(true); handleEdit(workout._id)}}>
            Edit
          </Button>

          <Button variant="danger" size="sm"
            onClick={()=>handleDelete(workout._id)}>
            Delete
          </Button>

        </Card.Body>
        </Card>
        );
      })}
      </div>

      
      <Modal size ='lg'
        show={showModal}
        onHide={()=>setShowModal(false)}>
          <Modal.Header> Edit Workout </Modal.Header>
          <Modal.Body>
          <form >
      <div className="form-inner">
        <h2>Workout</h2>

        <div className="form-group">
          <label htmlFor="workoutName">Name your workout:</label>
          <input
            type="string"
            name="workoutName"
            id="workoutName"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="workoutType">Type of workout:</label>
          <input
            type="string"
            name="workoutType"
            id="workoutType"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="calsBurned">Calories Burned:</label>
          <input
            type="Number"
            name="calsBurned"
            id="calsBurned"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Length of Workout:</label>
          <input type="string" name="time" id="time" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="notes">Notes:</label>
          <input
            type="string"
            name="notes"
            id="notes"
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Save Workout" />
      </div>
    </form>
          </Modal.Body>
      </Modal>
    </main>
  )
};

export default WorkoutList;


