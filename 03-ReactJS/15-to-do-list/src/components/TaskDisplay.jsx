import React from "react";

const TaskDisplay = (props) => {
  const { task, index, list, setList } = props;
  const handleDelete = () => {
    setList(() => {
      return list.filter((task) => list.indexOf(task) !== index);
    });
  };
  const handleChange = () => {
    list[index].isComplete = !list[index].isComplete;
    setList([...list]);
  };

  return (
    <div className='row'>
      <ul className='row'>
        <div style={task.isComplete ? { textDecoration: "line-through" } : {}}>
          {task.name}
        </div>
        <input
          type='checkbox'
          onChange={handleChange}
          checked={task.isComplete}
        />
        <button onClick={handleDelete} className='btn-red'>
          X
        </button>
      </ul>
    </div>
  );
};
export default TaskDisplay;
