import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard lastName = {'Doe'}  firstName = {'Jane'} age = {45}  hairColor = {'Black'} />
        <PersonCard lastName = {'John'}  firstName = {'Smith'} age = {88}  hairColor = {'Brown'} />
        <PersonCard lastName = {'Mallard'}  firstName = {'Fillmore'} age = {50}  hairColor = {'Brown'} />
        <PersonCard lastName = {'Maria'} firstName = {'Smith'} age = {62}  hairColor = {'Brown'} />
    </div>
  );
}

export default App;
