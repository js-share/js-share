import React, { Component } from 'react';
import MyDocs from './documents/MyDocs.js';
import SharedDocs from './documents/SharedDocs.js';
import axios from 'axios';

class DocList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      my_docs: [],
      shared_docs: []
    };
  }

  componentDidMount() {
    axios.get('/api/getdocuments')
      .then(res => {
        this.setState({
          my_docs: res.data.owned,
          shared_docs: res.data.permitted
        });
      });
  }
  
  render() {
    return (
      <div>
        <MyDocs myDocs={this.state.my_docs} />
        <SharedDocs sharedDocs={this.state.shared_docs} />
      </div>
    );
  }
}

export default DocList;
