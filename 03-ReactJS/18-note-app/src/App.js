import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Link } from "@reach/router";
import AllNotes from "./components/AllNotes";
import NewNote from "./components/NewNote";

function App() {
  const [notes, setNotes] = useState([]);
  /* localStorage rembember the notes */
  useEffect(() => {
    const notesFromSession = localStorage.getItem("notes");
    if (notesFromSession) {
      console.log(notesFromSession);
      setNotes(notesFromSession.split(","));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", notes);
  }, [notes]); //we gonna wait untill notes to change
  /* localStorage rembember the notes */

  const AddNote = (note) => {
    setNotes([...notes, note]); //add note to notes that we have already
  };

  return (
    <div className='App'>
      <Link className='mr-4' to='/'>
        View All Notes{" "}
      </Link>
      <Link to='/new'>Add Note</Link>
      <Router>
        <AllNotes notes={notes} path='/' />
        <NewNote AddNote={AddNote} path='/new' />
      </Router>
    </div>
  );
}

export default App;
