import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header.js';
import Home from './Home.js';
import Hello from './Hello.js';
import MyDocs from './MyDocs.js';

// % AUTH ROUTES:
import Signout from './auth/Signout.js';
import RequireAuth from './auth/RequireAuth.js';
import Protected from './auth/Protected.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { auth: false }
    this.setLoggedIn = this.setLoggedIn.bind(this);
    this.setLoggedOut = this.setLoggedOut.bind(this);
  }

  setLoggedIn() {
    this.setState({ auth: true });
  }

  setLoggedOut() {
    this.setState({ auth: false });
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          <Header
            auth={this.state.auth}
            setLoggedIn={this.setLoggedIn}
            setLoggedOut={this.setLoggedOut}
          />
          <Switch>
            <Route exact path="/" component={() => <Home auth={this.state.auth} />} />
            <Route path="/hello" component={Hello} />
            <Route path="/documents" component={MyDocs} />
            <Route path="/signout" component={Signout} />
            <Route path="/protected" component={RequireAuth(Protected)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
