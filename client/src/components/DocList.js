import React, { Component } from 'react';
import MyDocs from './documents/MyDocs.js';
import SharedDocs from './documents/SharedDocs.js';

class DocList extends Component {
  constructor(props) {
    super(props);

    this.state = { message: '' };
  }

  componentDidMount() {
    fetch('/api/hello')
      .then(response => response.json())
      .then(json => {
        this.setState({ message: json.message });
      });
  }

  render() {
    return (
      <div>
        <MyDocs className="table-responsive-sm" />
        <SharedDocs />
        {this.state.message || 'loading...'}
      </div>
    );
  }
}

export default DocList;
