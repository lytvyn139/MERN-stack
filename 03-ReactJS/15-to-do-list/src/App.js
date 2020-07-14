import React, { useState } from "react";
import InputForm from "./components/InputForm";
import TaskDisplay from "./components/TaskDisplay";
import "./App.css";
function App() {
  const [list, setList] = useState([]);
  return (
    <>
      <h2>To Do || !To Do:</h2>
      <InputForm list={list} setList={setList} />
      <div>
        {list.map((task, index) => (
          <TaskDisplay
            task={task}
            list={list}
            setList={setList}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
export default App;
