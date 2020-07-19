import React from "react";
import { Link } from "@reach/router";

const Appetizers = (props) => {
  return (
    // <div className="col-sm-8 offset-sm-2">
    <div>
      <ul className='list-group'>
        <li className='list-group-item bg-success text-light text-center'>
          🇮🇹 Menu 🇮🇹
        </li>
        {props.appetizers.map((appetizer, i) => (
          <li key={i} className='list-group-item float-left'>
            {appetizer.name}

            <span className='float-right'> {appetizer.price}</span>
          </li>
        ))}
      </ul>
      <Link className='btn btn-primary' to='/entrees'>
        Next
      </Link>
    </div>
  );
};

export default Appetizers;
