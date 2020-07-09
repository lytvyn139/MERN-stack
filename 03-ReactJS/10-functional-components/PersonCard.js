
/* 
//BEFORE
import React, { Component } from "react";

class PersonCard extends Component{
    render() {
        return (
            <div>
                <h1>{this.props.lastName} , {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
            </div>
        );
    }
 }

 export default PersonCard;
 */

 //AFTER
import React from 'react';
const PersonCard = props => {
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
}
export default PersonCard;


//APP.JS
/* 
import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard
          lastName = {'Doe'} 
          firstName = {'Jane'}
          age = {45} 
          hairColor = {'Black'} />
        
        <PersonCard
          lastName = {'John'} 
          firstName = {'Smith'}
          age = {88} 
          hairColor = {'Brown'} />

        <PersonCard
          lastName = {'Mallard'} 
          firstName = {'Fillmore'}
          age = {50} 
          hairColor = {'Brown'} />
        
        <PersonCard
          lastName = {'Maria'} 
          firstName = {'Smith'}
          age = {62} 
          hairColor = {'Brown'} />

        <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
        
    </div>
  );
}

export default App;


*/