import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { LOGIN } from "../utils/mutations";
import Auth from '../utils/auth';

function LoginForm()  {
  const [formState, setFormState] = useState({ email: '', password: '' });
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
  const [login,{error}] = useMutation(LOGIN);
    
  const submitHandler = async event => {
    event.preventDefault();

    try{
      const {data} = await login({
        variables:{...formState}
      });

      console.log(data);
      Auth.login(data.userLogin.token);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>
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
    {error && <div>Login failed</div>}
    </div>
  );
}

export default LoginForm;
