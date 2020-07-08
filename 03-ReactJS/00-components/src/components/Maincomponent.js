import React, { Component } from "react";
/* When creating a Class Component 
* Each class must:
1) Have a name starting with a capital letter.
2) Extend React.Component.
3) Have a render() method that returns a React Element either by JSX or React.createElement(). Below, we are using JSX.
 */
class Maincomponent extends Component{
    render() {
        return (
            <div>
                <h1>We are in the new component</h1>
                <h2>{this.props.hello}</h2>
            </div>
        );
    }
 }

 export default Maincomponent;