import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorHomePage from "./AuthorHomePage";

const AllAuthors = (props) => {
    const [authors, setAuthors] = useState([]);
    const fetchAuthors = () => {
        axios.get("http://localhost:8000/api/authors/")
            .then(res => {
                console.log(res);
                setAuthors(res.data.author)
            })
            .catch(err => console.log(err));
    }
    useEffect(() => {
        fetchAuthors();
    }, []);

    return (
        <div>
            {authors.map((author) =>
                <AuthorHomePage key={author._id} authorFromAllAuthors={author} />)}
        </div>
    );
}

export default AllAuthors;