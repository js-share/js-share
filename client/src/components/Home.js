import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';


const Home = () => (
  <div className="container">
    <div>Home page</div>
    <div>Click <Link to="/hello">here</Link> to receive a message from the server</div>
    <Login className="login" />
  </div>
);

export default Home;
