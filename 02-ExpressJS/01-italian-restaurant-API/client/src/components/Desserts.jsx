import React from "react";
import { Link } from "@reach/router";

const Desserts = (props) => {
  return (
    // <div className="col-sm-8 offset-sm-2">
    <div>
      <ul className='list-group'>
        <li className='list-group-item bg-danger  text-light text-center'>
          🇮🇹 Menu 🇮🇹
          {/* I know it's not how you paste emoji in JSX */}
        </li>
        {props.desserts.map((dessert, i) => (
          <li key={i} className='list-group-item float-left'>
            {dessert.name}

            <span className='float-right'> {dessert.price}</span>
          </li>
        ))}
      </ul>
      <Link className='btn btn-primary float-right' to='/'>
        Back
      </Link>
    </div>
  );
};

export default Desserts;
