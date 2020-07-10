import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Result = (props) => {
  const { firstName, lastName, email, password, confirmPassword } = props.data;
  return (
    <>
      <h2>Result</h2>
      <p>First Name: {firstName} </p>
      <p>Last Name: {lastName} </p>
      <p>Email: {email} </p>
      <p>Password: {password} </p>
      <p>Confirm Password: {confirmPassword} </p>
    </>
  );
};

export default Result;
