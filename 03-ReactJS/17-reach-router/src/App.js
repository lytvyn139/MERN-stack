import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Link } from "@reach/router";
import MainDishes from "./components/MainDishes";
import Desserts from "./components/Desserts";
import Beverages from "./components/Beverages";
import Locations from "./components/Locations";
import Page404 from "./components/Page404";

function App() {
  const setActive = (e) => {
    const links = document.getElementsByClassName("nav-link");
    for (let link of links) {
      link.classList.remove("active");
    }
    e.target.classList.add("active");
  };

  return (
    <div className='App'>
      <h1>Welcome to Luigi's</h1>

      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <Link className='nav-link active' onClick={setActive} to='/'>
            Main dish
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' onClick={setActive} to='/beverages'>
            Beverages
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' onClick={setActive} to='/desserts'>
            Desserts
          </Link>
        </li>
      </ul>
      <Router>
        <MainDishes path='/' />
        <Beverages path='/beverages' />
        <Desserts path='/desserts' />
        <Locations path='/location/:city' />
        <Page404 path='*' />
      </Router>
      <div className='mt-5'>
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <Link
              className='nav-link active'
              onClick={setActive}
              to='/location/Chicago'>
              Chicago
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' onClick={setActive} to='/location/DC'>
              DC
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              onClick={setActive}
              to='/location/Seattle'>
              Seattle
            </Link>
          </li>
        </ul>
      </div>
      {/*  */}
    </div>
  );
}

export default App;
