import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import moment from "moment";

const Display = (props) => {
  const [all, setAll] = useState([]);
  const [showPast, setShowPast] = useState(false);
  const [activities, setActivities] = useState([]);

  const fetchActivities = () => {
    //As soon as this component loads it knows that I wan't to request info from backend
    axios
      .get("http://localhost:8000/api/schedule")
      .then((res) => {
        console.log(res);
        //will actually display data from server
        setAll(res.data);
        // setActivities(res.data);
        // this will filter out past schedules
        setActivities(res.data.filter((a) => new Date(a.start) > new Date()));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchActivities();
  }, []); //with out empty array it will run non-stop

  const remove = (_id) => {
    console.log(_id);
    axios
      .delete(`http://localhost:8000/api/schedule/${_id}`)
      .then((res) => {
        console.log(res);
        fetchActivities();
      })
      .catch((err) => console.log(err));
  };

  const toggle = (e) => {
    if (showPast) {
      setActivities(all.filter((a) => new Date(a.start) > new Date()));
    } else {
      setActivities(all);
    }
    setShowPast(!showPast);
  };

  return (
    <div className="main-display">
      {showPast ? (
        <button className='btn' onClick={toggle}>
          Hide Past Activities
        </button>) : (<button className='btn' onClick={toggle}>
          Show Past Activities
        </button>
        )}
      {activities.map((act, i) => (
        <div key={act._id}>
          <h2>{act.activity}</h2>
          <div>
            <p>{moment(act.start).format("MMMM Do YYYY, h:mm:ss a")}</p>
            <div>
              <p>Description: {act.description}</p>
              Duration: {act.duration} {act.units}
            </div>
            <Link className='btn' to={`/edit/${act._id}`}>
              Edit
            </Link>
            <button className='btn' onClick={(e) => remove(act._id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Display;
