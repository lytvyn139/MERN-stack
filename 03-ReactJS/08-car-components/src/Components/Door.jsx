import React, { Component } from 'react';

class Door extends Component {
    render() {
        return (
            <div className="card my-4">
                <div className="card-header text-light" style={{backgroundColor: this.props.color}}>Door</div>
                <div className="card-body">
                    <p>This is a {this.props.color} painted door!</p>
                    <p>The door is locked? {`${this.props.isLocked}`}</p>
                    { this.props.children }
                </div>
            </div>
        )
    }
}


export default Door;