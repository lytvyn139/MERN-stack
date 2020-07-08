import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent';
        
/* We have a Component called MyNewComponent. There is one prop called header which we can access within our MyNewComponent.js. We also have some text between the JSX tags. All components between these two are called "children". We can access them via the following: */    

function App() {
  return (
    <div className="App">
        <MyNewComponent header={ "Header Prop" }>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
        </MyNewComponent>  
    </div>
  );
}
    
export default App;