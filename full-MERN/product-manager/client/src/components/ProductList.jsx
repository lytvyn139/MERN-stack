import React from "react";

export default (props) => {
  return (
    <div>
      {props.product.map((product, index) => {
        return (
          <ul key={index}>
            <li>Title: {product.title} </li>
            <li>Price: ${product.price}</li>
            <li>Description: {product.description} </li>
          </ul>
        );
      })}
    </div>
  );
};
