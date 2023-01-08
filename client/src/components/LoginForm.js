import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { LOGIN } from "../utils/mutations";


function LoginForm()  {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login] = useMutation(LOGIN, {
    variables: {
      email: formState.email,
      password: formState.password
    },
    onCompleted: ({ userLogin }) => {
      localStorage.setItem('auth_token', userLogin.token);
      window.location.reload(true)
    }
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
    login()
  }
  return (
    <form onSubmit= {submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={handleChange} />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
