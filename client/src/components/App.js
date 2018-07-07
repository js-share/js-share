import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header.js';
import Home from './Home.js';
import Hello from './Hello.js';

// % AUTH ROUTES:
import Signin from './auth/Signin.js';
import Signup from './auth/Signup.js';
import Signout from './auth/Signout.js';
import RequireAuth from './auth/RequireAuth.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hello" component={Hello} />
            <Route path="/signin" component={Signin} />
            <Route path="/signout" component={Signout} />
            <Route path="/signup" component={Signup} />
            <Route path="/protected" component={RequireAuth(Protected)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
