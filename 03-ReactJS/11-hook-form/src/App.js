import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    /* they will be passed in Form */
  });

  return (
    <>
      <Form inputs={state} setInputs={setState} />
      <Result data={state} />
    </>
  );
}

export default App;
