import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => (
  <div className="container">

    <div className="jumbotron">
      <h1 className="display-4">Welcome to JS-Share!</h1>
      <p className="lead">The most advanced real time collaboration platform ever created.</p>
      <p className="lead">Utilizing Google Authentication to verify all users, you will be able to access your own documents while also sharing documents with other users that have signed up.</p>


      <Link
        className="btn btn-primary btn-lg"
        to="/documents"
        role="button"
        onClick={props.setLoggedIn}
      >
        Sign In To Get Started</Link>
    </div>
  </div>
);

export default Home;
