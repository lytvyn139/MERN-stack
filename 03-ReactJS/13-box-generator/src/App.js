import React, { useState } from "react";
import BoxForm from "./components/BoxForm";
import BoxDisplay from "./components/BoxDisplay";

function App() {
  const [colorsList, setColorsList] = useState([]);

  const addNewColor = (newColor) => {
    setColorsList([...colorsList, newColor]);
  };

  return (
    <div className='App'>
      <BoxForm onNewColor={addNewColor} />
      <BoxDisplay colors={colorsList} />
    </div>
  );
}

export default App;
