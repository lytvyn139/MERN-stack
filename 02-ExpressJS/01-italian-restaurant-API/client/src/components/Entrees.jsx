import React from "react";
import { Link } from "@reach/router";

const Entrees = (props) => {
  return (
    // <div className="col-sm-8 offset-sm-2">
    <div>
      <ul className='list-group'>
        <li className='list-group-item text-dark text-center'>🇮🇹 Menu 🇮🇹</li>
        {props.entrees.map((entree, i) => (
          <li key={i} className='list-group-item float-left'>
            {entree.name}

            <span className='float-right'> {entree.price}</span>
          </li>
        ))}
      </ul>
      <Link className='btn btn-primary' to='/desserts'>
        Next
      </Link>
      <Link className='btn btn-primary float-right' to='/'>
        Back
      </Link>
    </div>
  );
};

export default Entrees;
