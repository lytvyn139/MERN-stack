import React from "react";

const BoxDisplay = (props) => {
  return (
    <>
      {props.colors.map((color, i) => (
        <div
          key={i}
          style={{
            display: "inline-block",
            height: "3rem",
            width: "3rem",
            margin: ".5rem",
            backgroundColor: `${color}`,
          }}></div>
      ))}
    </>
  );
};

export default BoxDisplay;
