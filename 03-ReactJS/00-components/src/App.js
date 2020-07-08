import React from 'react';
import './App.css';

import Maincomponent from './components/Maincomponent';

function App() {
  return (
    <div className="App">
      <Maincomponent hello={'hello react world'}/>
      <Maincomponent hello={'re-using this component'}/>
    </div>
  );
}

export default App;
