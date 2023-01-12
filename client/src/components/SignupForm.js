import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { SIGNUP } from "../utils/mutations";
import Auth from '../utils/auth';

function SignupForm() {

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const [addUser,{error}] = useMutation(SIGNUP);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formState);

    try{
      const {data} = await addUser({
        variables: {
          username: formState.username,
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        age: parseInt(formState.age),
        status: formState.status,
        expLevel: formState.expLevel,
        gym: formState.gym,
        }
      });
      Auth.login(data.addUser.token);
    }catch(e){
      console.error(e);
    }
  };
 
  return (
   <div>
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Sign up</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="string"
            name="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="string"
            name="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="Age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            onChange={handleChange}
          />
        </div> */}


        {/* <div className="form-group">
          <label htmlFor="status">Are you a user or trainer:</label>
          <input
            type="string"
            name="status"
            id="status"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="expLevel">Level:</label>
          <input
            type="string"
            name="expLevel"
            id="expLevel"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="gym">Gym:</label>
          <input type="string" name="gym" id="gym" onChange={handleChange} />
        </div> */}

        <input type="submit" value="SIGNUP" />
      </div>
    </form>
    {error && <div>Sign up failed</div>}
    </div>
  );
}

export default SignupForm;
