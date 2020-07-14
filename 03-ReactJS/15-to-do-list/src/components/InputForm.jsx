import React from "react";

const InputForm = (props) => {
  const { list, setList } = props;
  let task = {
    name: "",
    isComplete: false,
  };
  const handleChange = (e) => {
    task.name = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, task]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type='text' name='task' />
      <input className='btn-green' type='submit' value='ADD' />
    </form>
  );
};
export default InputForm;
