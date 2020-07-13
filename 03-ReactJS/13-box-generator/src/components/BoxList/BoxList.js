import React, { Component } from "react";
import { default as UUID } from "uuid";

import Box from "../Box/Box";
import Boxform from "../BoxForm/Boxform";

//import "./Boxlist.scss";

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
  }
  removeBox = (id) => {
    const boxes = this.state.boxes.filter((box) => box.id !== id);
    this.setState({ boxes: boxes });
  };
  addBox = (color) => {
    let newBox = { key: UUID.v4(), id: UUID.v4(), color: color };
    // let newBox = { key: UUID.v4(), id: UUID.v4(), color: color };
    let boxes = [...this.state.boxes, newBox];
    this.setState({
      boxes: boxes,
    });
  };
  render() {
    return (
      <div className='BoxList'>
        <div className='BoxList__boxes'>
          <Boxform handleSubmit={this.addBox} />
          {this.state.boxes.map((box) => {
            return (
              <Box
                key={box.key}
                id={box.id}
                color={box.color}
                clickFunction={this.removeBox}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
