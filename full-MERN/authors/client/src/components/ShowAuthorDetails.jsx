import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const ShowAuthorDetails = (props) => {
    const [name, setName] = useState("");
    const [setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props._id}`)
            .then(res => {
                setName(res.data.author.name);
            })
            .catch(err => console.log(err));
    }, [props._id]);


    const deleteAuthor = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/authors/delete/${props._id}`)
            .then(res => {
                console.log(res);
                if (res.data.error) {
                    setErrors(res.data.error.errors);
                } else {
                    navigate("/");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="form-group m-2 p-2 bg-dark rounded shadow-lg text-dark">
            <div>
                <p className="text-light text-left mt-2 ml-2">Authors Name: {name}</p>
                <button className="btn btn-danger m-1" onClick={deleteAuthor} value={name}>Delete </button>
            </div>
        </div>
    );
}

export default ShowAuthorDetails;