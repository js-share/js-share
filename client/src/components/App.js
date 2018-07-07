import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header.js';
import Home from './Home.js';
import DocList from './DocList.js';

// % AUTH ROUTES:
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
            <Route exact path="/" component={() => <Home auth={this.state.auth} setLoggedIn={this.setLoggedIn} />} />
            <Route path="/documents" component={() => <DocList auth={this.state.auth} />} />

            <Route path="/protected" component={RequireAuth(Protected)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
