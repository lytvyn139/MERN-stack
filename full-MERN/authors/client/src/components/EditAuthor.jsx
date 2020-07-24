import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditAuthor = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props._id}`)
            .then(res => {
                setName(res.data.author.name);
                // setName(res.data.pet.name);
            })
            .catch(err => console.log(err));
    }, [props._id]);

    const updateAuthor = (e) => {
        e.preventDefault();
        const authors = { name };
        axios.put(`http://localhost:8000/api/authors/update/${props._id}`, authors)
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
        <div className="App">
            {/* <h2 className="font-weight-bold">{name} {type}</h2> */}
            <div className="form-group m-2 p-2 bg-dark rounded shadow-lg text-dark">

                <form onSubmit={updateAuthor}>
                    <p className="text-light mt-1">Name:</p>
                    <input type="text" onChange={e => setName(e.target.value)} value={name} />
                    {errors.name ? <p className="text-danger">{errors.name.properties.message}</p> : ""}
                    <input className="btn btn-success m-2" type="submit" value="Update"></input>

                </form>
            </div>
        </div>
    );
}

export default EditAuthor;