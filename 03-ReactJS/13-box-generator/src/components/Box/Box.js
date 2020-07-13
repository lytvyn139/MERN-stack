import React, { useState } from "react";
//import "./Box.scss";

const Box = (props) => {
  return (
    <div
      className='Box'
      style={{
        backgroundColor: `${this.props.color}`,
      }}>
      <button
        className='Box__button'
        onClick={() => this.props.clickFunction(this.props.id)}>
        X
      </button>
    </div>
  );
};
export default Box;
