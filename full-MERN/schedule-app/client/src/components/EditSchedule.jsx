//here we gonna collect data and hold it into state
import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import moment from 'moment';


const EditSchedule = props => {
    const [activity, setActivity] = useState("");
    const [description, setDescription] = useState("");
    const [start, setStart] = useState("");
    const [duration, setDuration] = useState(0);
    const [units, setUnits] = useState("minutes");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        //when the props change, let's print it
        axios.get(`http://localhost:8000/api/schedule/${props._id}`)
            .then(res => {
                console.log(res);
                console.log(res.data.start);
                setActivity(res.data.activity);
                setDescription(res.data.description);
                setStart(moment(res.data.start).format('YYYY-MM-DDTHH:mm'));
                setDuration(res.data.duration);
                setUnits(res.data.units);
            }).catch(errors => console.log(errors));
    }, [props._id]);

    const UpdateSchedule = e => {
        //form it to single obj+send this info to back end
        e.preventDefault();
        const scheduleItem = { activity, description, start, duration, units };

        axios.put(`http://localhost:8000/api/schedule/${props._id}`, scheduleItem)
            .then(res => {
                console.log(res);
                //if any errors are comming from axios request/db
                if (res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
            }).catch(err => console.log(err));
    }

    const remove = () => {
        axios.delete(`http://localhost:8000/api/schedule/${props._id}`)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <form onSubmit={UpdateSchedule}>
                <div >
                    <p>Activity:</p>
                    <input type="text" onChange={e => setActivity(e.target.value)} value={activity} />
                    {errors.activity ? <p className="text-danger">{errors.activity.properties.message}</p> : ""}
                </div>
                <div >
                    <p>Description:</p>
                    <textarea rows='10' cols='30' onChange={e => setDescription(e.target.value)} value={description}></textarea>
                    {errors.description ? <p className="text-danger">{errors.description.properties.message}</p> : ""}
                </div>
                <div >
                    <label>Start:</label>
                    <input type="datetime-local" onChange={e => setStart(e.target.value)} value={start} />
                    {errors.start ? <p className="text-danger">{errors.start.properties.message}</p> : ""}
                </div>
                <div >
                    <div>
                        <label>Duration:</label>
                        <input type="number" onChange={e => setDuration(e.target.value)} value={duration} />
                        {errors.duration ? <p className="text-danger">{errors.duration.properties.message}</p> : ""}
                    </div>
                    <div >
                        <label>Units:</label>
                        <select onChange={e => setUnits(e.target.value)} value={units}>
                            <option>minutes</option>
                            <option>hours</option>
                            <option>days</option>
                        </select>
                    </div>

                </div>
                <input type="submit" className="btn" value="Update" />
                <button className="btn" onClick={remove}>Remove</button>
            </form>
        </div>
    )
}

export default EditSchedule;