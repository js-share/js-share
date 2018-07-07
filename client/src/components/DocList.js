import React, { Component } from 'react';
import MyDocs from './MyDocs.js';
import SharedDocs from './SharedDocs.js';

class DocList extends Component {
  constructor(props) {
    super(props);

    this.state = {message: ''};
  }

  componentDidMount() {
    fetch('/api/hello')
      .then(response => response.json())
      .then(json => {
        this.setState({message: json.message});
      });
  }

  render() {
    return (
      <div>
        {this.state.message || 'loading...'}
        <MyDocs />
        <SharedDocs />
      </div>
    );
  }
}

export default DocList;
