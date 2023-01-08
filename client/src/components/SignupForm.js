import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { SIGNUP } from "../utils/queries";

function SignupForm() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    status: "",
    expLevel: "",
    gym: "",
  });
  const [signup] = useMutation(SIGNUP, {
    variables: {
      username: formState.username,
      email: formState.email,
      password: formState.password,
      firstName: formState.firstName,
      lastName: formState.lastName,
      status: formState.status,
      expLevel: formState.expLevel,
      gym: formState.gym,
    },

    onCompleted: ({ addUser }) => {
      localStorage.setItem("auth_token", addUser.token);
      window.location.reload(true);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("formState", formState);
    signup();
  };
  return (
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
          <label htmlFor="firstName">Name:</label>
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

        <div className="form-group">
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
        </div>

        <input type="submit" value="SIGNUP" />
      </div>
    </form>
  );
}

export default SignupForm;
