import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './Header.js';
import Home from './Home.js';
import DocList from './DocList.js';
import EditDoc from './documents/EditDoc.js';
import CreateDoc from './documents/CreateDoc.js';
import Settings from './documents/Settings.js';


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
            <Route path="/documents" component={() => <DocList />} />
            <Route path="/newdoc" component={CreateDoc} />
            <Route path="/editdoc" component={EditDoc} />
            <Route path="/settings/:id" component={Settings} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
