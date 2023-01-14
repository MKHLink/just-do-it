import React, {useState} from 'react';
import { useQuery, useMutation } from "@apollo/client";
 import { GET_ME } from "../utils/queries";
 import {Card, Button, Modal} from 'react-bootstrap';
 import { DELETE_WORKOUT } from "../utils/mutations";
import SingleWorkout from './SingleWorkout';

function TrainerList() {
  const {data,loading} = useQuery(GET_ME);

  const user = data?.me || {};
  
  console.log(user);
  

  const [showModal, setShowModal] = useState(false);

  const [currentWorkout, setCurrentWorkout] = useState({_id:""});

  const setEdit = async(workoutId)=>{
    console.log(workoutId);

    setCurrentWorkout({
      _id: workoutId
    });
  }

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
 
if(loading){
  return <div>Loading...</div>;
}
  return (
    <main>
      <div>
      <Card  style={{ width: '18rem' }}>
        <Card.Body className="workoutList">
          <Card.Title>{user.firstName} {user.lastName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Username: {user.username}</Card.Subtitle>
          <Card.Text>Age: {user.Age}</Card.Text>
          <Card.Text>Email: {user.email}</Card.Text>
          <Card.Text>Gym: {user.gym}</Card.Text>
          <Card.Text>Level: {user.expLevel}</Card.Text>
        
          {user.workouts && user.workouts.map(workout =>{
            return(
              <Card.Body key = {user.workouts._id}>
                <Card.Body>
                  <Card.Title>Workout Name: {workout.workoutName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">User: {workout.username}</Card.Subtitle>
                  <Card.Text>Workout Type: {workout.workoutType}</Card.Text>
                  <Card.Text>Calories Burned: {workout.calsBurned}</Card.Text>
                  <Card.Text>Workout Duration: {workout.time}</Card.Text>
                  <Card.Text>Fitness Tips: {workout.notes}</Card.Text>
                  </Card.Body>

                  <Button variant="primary" size="sm"
                  onClick={()=>{setShowModal(true);setEdit(workout._id)}}>
                   Edit
                  </Button>

                  <Button variant="danger" size="sm"
                  onClick={()=>handleDelete(workout._id)}>
                  Delete
                  </Button>

              </Card.Body>
            );
          })}
        </Card.Body>
        </Card>
        </div>

        <Modal size ='lg'
        show={showModal}
        onHide={()=>setShowModal(false)}>
          <Modal.Header> Edit Workout </Modal.Header>
          <Modal.Body>
          <SingleWorkout currentWorkout={currentWorkout} setShowModal = {setShowModal} handleModalClose={()=>setShowModal(false)}/>
          </Modal.Body>
      </Modal>
    </main>
  )
};

export default TrainerList;