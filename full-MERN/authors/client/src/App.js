import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AuthorForm from './components/AuthorForm';
import AllAuthors from './components/AllAuthors';
import EditAuthor from './components/EditAuthor';
import ShowAuthorDetails from './components/ShowAuthorDetails';

import { Router, Link } from "@reach/router";

function App() {
  return (
    <div className="wrapper">
      <div className="text-center container p-4 bg-dark text-light">
        <div>
          <h4>Favourite Authors:</h4>
          <p>we have quotes by:</p>
          <Link to="/new"><button className="btn btn-secondary m-4">Add Author: </button></Link>
        </div>

        <Router>
          <AllAuthors path="/" />
          <AuthorForm path="/new" />
          <EditAuthor path="update/:_id" />
          <ShowAuthorDetails path="/:_id" />
        </Router>
      </div>
    </div>
  );
}

export default App;
