import React, { Component } from 'react';

class Engine extends Component {
    render() {
        return (
            <div className="card my-4">
                <div className="card-header">Engine</div>
                <div className="card-body">
                    <p>Power: {this.props.hp} HP</p>
                    <p>Toque: {this.props.torque} N*m</p>
                    <p>Cylinders: {this.props.numCylinders}</p>
                </div>
            </div>
        )
    }
}

export default Engine;