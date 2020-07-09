import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Engine from './Components/Engine';
import Wheel from './Components/Wheel';
import Door from './Components/Door';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: "darkslategrey",
      locked: false
    } 
  }

  lockDoors = (e) => {
    this.setState({locked: !this.state.locked});
  }

  render() {
    return (
      <div className="container">
        <div className="card my-4">
          <div className="card-header text-light" style={{backgroundColor: this.state.color}}>Car</div>
          <div className="card-body">
            <Engine hp={250} torque={225} numCylinders={6} />
            {/* <Engine hp={500} torque={400} numCylinders={8} /> */}
            <Wheel dia={18} width={255} psi={32} />
            <Wheel dia={18} width={255} psi={31} />
            <Wheel dia={18} width={255} psi={32} />
            <Wheel dia={18} width={255} psi={32} />
            <Door color={this.state.color} isLocked={this.state.locked}>
            {
              this.state.locked ?
              <button
                className="btn btn-danger"
                onClick={this.lockDoors}
              >UnLock Doors
              </button>
              :
              <button
                className="btn btn-success"
                onClick={this.lockDoors}
              >Lock Doors
              </button>
            }
            </Door>
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;
