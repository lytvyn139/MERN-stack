import React from 'react';
import { Link } from "@reach/router";

const AuthorHomePage = (props) => {

    return (
        <div className="m-2 p-2 bg-dark rounded shadow-lg text-dark ">
            <p className="font-weight-bol text-light">{props.authorFromAllAuthors.name}</p>

            <div>
                <Link className="btn btn-secondary m-2 " to={"/update/" + props.authorFromAllAuthors._id} >Edit</Link>

                <Link className="btn btn-secondary m-2 " to={"/" + props.authorFromAllAuthors._id}>Details</Link>
            </div>
        </div>
    );
}
export default AuthorHomePage;