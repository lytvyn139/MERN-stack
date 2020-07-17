import React, { useState } from "react";
import { navigate } from "@reach/router";

const NewNote = (props) => {
  const [note, setNote] = useState("");

  const CreateNote = (e) => {
    e.preventDefault();
    props.AddNote(note);

    // const blog = "blog";
    // const id = "31337";
    // navigate(`/${blog}/${id}`);

    //navigate(`/${note}/${id}`);

    navigate("/");
  };
  return (
    <>
      <h2 className='mt-5'>New Note</h2>
      <form onSubmit={CreateNote}>
        <div className='form-group'>
          <textarea
            className='form-control'
            placeholder='Your Note Here'
            autoFocus
            onChange={(e) => setNote(e.target.value)}></textarea>
        </div>
        <input type='submit' className='btn btn-info' value='Create Note' />
      </form>
    </>
  );
};
export default NewNote;
