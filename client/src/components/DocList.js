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
    // axios.get('/api/getdocuments')
    //   .then(res => {
    //     this.setState({
    //       my_docs: res.data.owned,
    //       shared_docs: res.data.permitted
    //     });
    //   })

    this.setState({
      my_docs: [
        {
          "doc_id": 888,
          "owner": "Loka",
          "name": "Recursion",
          "last_updated": "2018-07-08 12:22:30.583"
        },
        {
          "doc_id": 889,
          "owner": "Charlie",
          "name": "For Loops",
          "last_updated": "2018-07-08 12:22:30.583"
        }
      ],
      shared_docs: [
        {
          "doc_id": 88338,
          "owner": "Leo",
          "name": "Recursion",
          "last_updated": "2018-07-08 12:22:30.583"
        },
        {
          "doc_id": 8833779,
          "owner": "Luna",
          "name": "For Loops",
          "last_updated": "2018-07-08 12:22:30.583"
        }
      ]
    })
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
