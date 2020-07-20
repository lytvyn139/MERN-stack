import React, { useEffect, useState } from "react";
import Error404 from "./Error404";

const Details = (props) => {
  const { element } = props;
  const [values, setvalues] = useState([]);

  useEffect(() => {
    let temp = [];
    for (let key in element) {
      temp.push({ key: key, value: element[key] });
    }
    setvalues(temp);
    console.log(temp);
  }, [element]);

  return element.name === "Unknown" ? (
    <Error404 />
  ) : (
    <div>
      <h1>{element.name ? element.name : element.title}</h1>
      {values.map((item, index) => (
        <div key={index}>
          <div>
            {item.key}: {item.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
