import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';


const ScheduleForm = props => {
    const [activity, setActivity] = useState("");
    const [description, setDescription] = useState("");
    const [start, setStart] = useState("");
    const [duration, setDuration] = useState(0);
    const [units, setUnits] = useState("minutes");
    const [errors, setErrors] = useState({});


    const CreateSchedule = e => {
        e.preventDefault();
        const scheduleItem = { activity, description, start, duration, units };
        axios.post("http://localhost:8000/api/schedule", scheduleItem)
            .then(res => {
                console.log(res);
                if (res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
            }).catch(err => console.log(err));
    }

    return (
        <div className="container">
            <form onSubmit={CreateSchedule}>
                <div >
                    <p>Activity:</p>
                    <input type="text" onChange={e => setActivity(e.target.value)} />
                    {errors.activity ? <p className="text-danger">{errors.activity.properties.message}</p> : ""}
                </div>
                <div >
                    <p>Description:</p>
                    <textarea rows='10' cols='30' onChange={e => setDescription(e.target.value)}></textarea>
                    {errors.description ? <p className="text-danger">{errors.description.properties.message}</p> : ""}
                </div>
                <div >
                    <p>Start</p>
                    <input type="datetime-local" onChange={e => setStart(e.target.value)} />
                    {errors.start ? <p className="text-danger">{errors.start.properties.message}</p> : ""}
                </div>
                <div >
                    <div>
                        <div>
                            <p>Duration: </p>
                            <input type="number" onChange={e => setDuration(e.target.value)} value={duration} />
                            {errors.duration ? <p className="text-danger">{errors.duration.properties.message}</p> : ""}
                        </div>
                    </div>
                    <div >
                        <div >
                            <p>Units: </p>
                            <select onChange={e => setUnits(e.target.value)}>
                                <option>minutes</option>
                                <option>hours</option>
                                <option>days</option>
                            </select>
                        </div>
                    </div>
                </div>
                <input type="submit" className="btn" value="Add " />
            </form>
        </div>
    )

}

export default ScheduleForm;