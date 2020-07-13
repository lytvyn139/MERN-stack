import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FormValidator = (props) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  });

  const onChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <div className='form-groups'>
        <label htmlFor='firstName'>First Name</label>
      </div>
      <div className='form-groups'>
        <input onChange={onChangeHandler} type='text' name='firstName' />
        {state.firstName.length !== 0 && state.firstName.length < 2 && (
          <p>First name must be at least 2 characters</p>
        )}
      </div>
      <div className='form-groups'>
        <label htmlFor='lastName'>Last Name</label>
      </div>
      <div className='form-groups'>
        <input onChange={onChangeHandler} type='text' name='lastName' />
        {state.lastName.length !== 0 && state.lastName.length < 2 && (
          <p>Last name must be at least 2 characters</p>
        )}
      </div>
      <div className='form-groups'>
        <label htmlFor='email'>Email</label>
      </div>
      <div className='form-groups'>
        <input onChange={onChangeHandler} type='email' name='email' />
        {state.email.length !== 0 && state.email.length < 5 && (
          <p>Email must be at least 5 characters</p>
        )}
      </div>
      <div className='form-groups'>
        <label htmlFor='password'>Password</label>
      </div>
      <div className='form-groups'>
        <input onChange={onChangeHandler} type='password' name='password' />
      </div>
      <div className='form-groups'>
        {state.password.length !== 0 && state.password.length < 8 && (
          <p>Password must be at least 8 characters</p>
        )}
      </div>
      <div className='form-groups'>
        <label htmlFor='confirm'>Confirm Password</label>
      </div>
      <div className='form-groups'>
        <input onChange={onChangeHandler} type='password' name='confirm' />
        {state.confirm !== state.password && (
          <p>Password must match confirmation</p>
        )}
      </div>
    </form>
  );
};

export default FormValidator;
