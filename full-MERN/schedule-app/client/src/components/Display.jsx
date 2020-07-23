import React, { useState, useEffect } from "react";
import axios from "axios";

const Display = (props) => {
  const [activities, setActivities] = useState([]);
  //As soon as this component loads it knows that I wan't to request info from backend
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/schedule")
      .then((res) => {
        console.log(res);
        //will actually display data from server
        setActivities(res.data);
      })
      .catch((err) => console.log(err));
  }, []); //with out empty array it will run non-stop
  return (
    <div>
      {activities.map((act) => (
        <div key={act._id}>
          <h1>{act.activity}</h1>
          <p>Description: {act.description} </p>
          <p>Start: {act.start} </p>
          <p>
            Duration: {act.duration} {act.units}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Display;
