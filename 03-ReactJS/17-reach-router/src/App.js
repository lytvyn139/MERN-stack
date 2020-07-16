import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Link } from "@reach/router";
import MainDishes from "./components/MainDishes";
import Desserts from "./components/Desserts";
import Beverages from "./components/Beverages";
import Locations from "./components/Locations";

function App() {
  return (
    <div className='App'>
      <h1>Welcome to Luigi's</h1>

      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <Link className='nav-link active' to='/'>
            Main dish
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/beverages'>
            Beverages
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/desserts'>
            Desserts
          </Link>
        </li>
      </ul>
      <Router>
        <MainDishes path='/' />
        <Beverages path='/beverages' />
        <Desserts path='/desserts' />
        <Locations path='/location/:city' />
      </Router>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <Link className='nav-link active' to='/location/Chicago'>
            Chicago
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/location/DC'>
            DC
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/location/Seattle'>
            Seattle
          </Link>
        </li>
      </ul>
      {/*  */}
    </div>
  );
}

export default App;
