import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Link } from "@reach/router";
import Appetizers from "./components/Appetizers";
import Entrees from "./components/Entrees";
import Desserts from "./components/Desserts";
import Locations from "./components/Locations";
import Page404 from "./components/Page404";
import axios from "axios";

function App(props) {
  const [menu, setMenu] = useState({
    appetizers: [],
    entrees: [],
    desserts: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:8004/api/menu")
      .then((res) => {
        console.log(res);
        setMenu(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
            Appetizers
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' onClick={setActive} to='/entrees'>
            Entrees
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' onClick={setActive} to='/desserts'>
            Desserts
          </Link>
        </li>
      </ul>
      {/*  */}
      <Router>
        <Appetizers appetizers={menu.appetizers} path='/' />
        <Entrees entrees={menu.entrees} path='/entrees' />
        <Desserts desserts={menu.desserts} path='/desserts' />
        <Locations path='/location/:city' />
        <Page404 path='*' />
      </Router>
      {/*  */}
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
    </div>
  );
}

export default App;
