import React from "react";
import { Link } from "@reach/router";

const Beverages = () => {
  return (
    // <div className="col-sm-8 offset-sm-2">
    <div>
      <ul className='list-group'>
        <li className='list-group-item text-dark text-center'>
          🇮🇹 Menu 🇮🇹
          {/* I know it's not how you paste emoji in JSX */}
        </li>
        <li className='list-group-item float-left'>
          Americano
          <span className='float-right'>$2</span>
        </li>
        <li className='list-group-item'>
          Tea
          <span className='float-right'>$3</span>
        </li>
        <li className='list-group-item'>
          Late
          <span className='float-right'>$5</span>
        </li>
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

export default Beverages;
