import React from "react";
import "./App.css";
import Display from "./components/Display";
import ScheduleForm from "./components/ScheduleForm";
import { Link, Router } from "@reach/router";

function App() {
  return (
    <div className='App'>
      <h1>Schedule app</h1>
      <Link className='btn' to='/'>
        {" "}
        Schedule{" "}
      </Link>
      <Link className='btn' to='/new'>
        {" "}
        New activity{" "}
      </Link>
      <Router>
        <Display path='/' />
        <ScheduleForm path='new' />
      </Router>
    </div>
  );
}

export default App;
