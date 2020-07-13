import React, { useState } from "react";

const BoxForm = (props) => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewColor(color);
    setColor("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='color'>Color: </label>
        <input
          onChange={(e) => setColor(e.target.value)}
          type='text'
          value={color}
          className='form-control'
        />
        <input type='submit' value='Add' />
      </form>
    </>
  );
};

export default BoxForm;
