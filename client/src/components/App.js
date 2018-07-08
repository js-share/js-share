import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './Header.js';
import Home from './Home.js';
import DocList from './DocList.js';
import EditDoc from './documents/EditDoc.js';
import CreateDoc from './documents/CreateDoc.js';
import Settings from './documents/Settings.js';

// % AUTH ROUTES:
import RequireAuth from './auth/RequireAuth.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { auth: null }
  }

  componentDidMount() {
    axios.get('/api/current_user')
      .then(
        (res) => {
          this.setState({ auth: res.data || false });
        }
      )
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header
            auth={this.state.auth}
          />
          <Switch>
            <Route exact path="/" component={() => <Home auth={this.state.auth} />} />
            <Route path="/documents" component={() => <DocList auth={this.state.auth} />} />
            <Route path="/editdocs" component={RequireAuth(EditDoc, this.state.auth)} />
            <Route path="/newdoc" component={RequireAuth(CreateDoc, this.state.auth)} />
            <Route path="/settings" component={RequireAuth(Settings, this.state.auth)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
