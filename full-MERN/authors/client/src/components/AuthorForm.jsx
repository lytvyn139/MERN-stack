import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const CreateAuthor = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    const createNewAuthor = (e) => {
        e.preventDefault();
        const authors = { name };
        axios.post("http://localhost:8000/api/authors/new", authors)
            .then(res => {
                if (res.data.error) {
                    setErrors(res.data.error.errors);
                } else {
                    navigate("/");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container-fluid ">
            <div className="form-group bg-dark rounded shadow-lg text-dark">
                <form onSubmit={createNewAuthor}>
                    <p className="text-light p-1">Name: </p>
                    <input type="text" onChange={e => setName(e.target.value)}></input>
                    {errors.name ? <p className="text-danger ">{errors.name.properties.message}</p> : ""}
                    <div>
                        <input className="btn btn-success m-2" type="submit" value="Add"></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateAuthor;