import React from "react";
import { Link } from "@reach/router";

const Desserts = () => {
  return (
    // <div className="col-sm-8 offset-sm-2">
    <div>
      <ul className='list-group'>
        <li className='list-group-item bg-danger  text-light text-center'>
          🇮🇹 Menu 🇮🇹
          {/* I know it's not how you paste emoji in JSX */}
        </li>
        <li className='list-group-item float-left'>
          Donut
          <span className='float-right'>$3</span>
        </li>
        <li className='list-group-item'>
          Tres Leches Cake
          <span className='float-right'>$3.50</span>
        </li>
        <li className='list-group-item'>
          New-Yook Cheese Cake
          <span className='float-right'>$6.99</span>
        </li>
      </ul>
      <Link className='btn btn-primary float-right' to='/'>
        Back
      </Link>
    </div>
  );
};

export default Desserts;
