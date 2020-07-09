import React, { Component } from 'react';

class Wheel extends Component {
    render() {
        return (
            <div className="card my-4">
                <div className="card-header">Wheel</div>
                <div className="card-body">
                    <p>Diameter: {this.props.dia} in</p>
                    <p>Width: {this.props.width} mm</p>
                    <p>Pressure: {this.props.psi} psi</p>
                </div>
            </div>
        )
    }
}

export default Wheel;