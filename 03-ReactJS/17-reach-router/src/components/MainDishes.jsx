import React from "react";
import { Link } from "@reach/router";

const MainDishes = () => {
  return (
    // <div className="col-sm-8 offset-sm-2">
    <div>
      <ul className='list-group'>
        <li className='list-group-item bg-success text-light text-center'>
          🇮🇹 Menu 🇮🇹
          {/* I know it's not how you paste emoji in JSX */}
        </li>
        <li className='list-group-item float-left'>
          Pasta
          <span className='float-right'>$12.15</span>
        </li>
        <li className='list-group-item'>
          Mozzarella sticks
          <span className='float-right'>$6.50</span>
        </li>
        <li className='list-group-item'>
          Ceasar salad
          <span className='float-right'>$7.99</span>
        </li>
      </ul>
      <Link className='btn btn-primary' to='/beverages'>
        Next
      </Link>
    </div>
  );
};

export default MainDishes;
