import React, { Component } from "react";

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            clickAge: props.age
        }
    }

    increaseAge = () => {
        this.setState({
            clickAge: this.state.clickAge + 1
        })
    }

    decreaseAge = () => {
        this.setState({
            clickAge: this.state.clickAge - 1
        })

    }
    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.clickAge}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                {/* SHORT CUT */}
                <button onClick={this.increaseAge}>Add age for {firstName} {lastName}</button>
                {/* <button onClick={this.increaseAge}>Add age to {this.props.firstName} {this.props.lastName}</button> */}
                <button onClick={this.decreaseAge}>Make {firstName} {lastName} younger</button>
            </div>
        );
    }
}

 export default PersonCard;