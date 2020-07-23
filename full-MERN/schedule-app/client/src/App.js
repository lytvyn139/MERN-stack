import React from "react";
import Display from "./components/Display";
import ScheduleForm from "./components/ScheduleForm";
import EditSchedule from "./components/EditSchedule";
import { Link, Router } from "@reach/router";
import "./App.css";

function App() {
  return (
    <div className="main-display">
      <h1>Schedule App</h1>
      <Link className='btn' to='/'>
        Schedule
      </Link>
      <Link className='btn' to='/new'>
        New Activity
      </Link>
      <Router>
        <Display path='/' />
        <ScheduleForm path='/new' />
        <EditSchedule path='/edit/:_id' />
      </Router>
    </div>
  );
}

export default App;
