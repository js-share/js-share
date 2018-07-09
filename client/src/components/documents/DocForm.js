import React, { Component } from 'react';
import axios from 'axios';

class DocForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      init: false,
      docTitle: '',
      sharedUsers: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleUsersChange = this.handleUsersChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onCancel(e) {
    e.preventDefault();
    this.props.history.push('/documents');
  }
  handleNameChange(e) {
    this.setState({ docTitle: e.target.value });
  }

  handleUsersChange(e) {
    this.setState({ sharedUsers: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let request;
    if (!this.props.docId) {
      request = axios.post(
        '/api/createdoc', {
          'name': this.state.docTitle,
          'permitted_users': this.state.sharedUsers ? this.state.sharedUsers.split('\n') : [] // separately handle empty string
        });
    }
    else {
      request = axios.post(
        '/api/docSettings', {
          'doc_id': this.props.docId,
          'name': this.state.docTitle,
          'permitted_users': this.state.sharedUsers ? this.state.sharedUsers.split('\n') : [] // separately handle empty string
        }
      );
    }

    request.then(
      res => {
        console.log(res.data)
        //redirect back to list of documents
        //pass in history property for redirect to work
        // this.props.history.push('/editdoc/' + res.data.doc_id || this.props.docId);
        this.props.history.push('/editdoc/' + (this.props.docId || res.data.doc_id));
      }
    )
      .catch(
        (err) => {
          console.log(err);
          this.props.history.push('/documents');
        }
      )
  }

  componentDidMount() {
    if (!this.props.docId) {
      this.setState({ init: true });
    }
    // if docId make axios get request to server for docTitle and sharedUsers
    axios.get(`/api/docSettings/${this.props.docId}`).then(res => {
      this.setState({
        init: true,
        docTitle: res.data.docTitle,
        sharedUsers: res.data.sharedUsers
      });
    }).catch(err => console.log(err));
  }

  //API Call in component did mount that returns list of documents and users associated with document
  render() {
    if (!this.state.init) {
      return <div></div>
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Document Title</label>
            <input type="text" className="form-control" placeholder="Enter Document Title" value={this.state.docTitle} onChange={this.handleNameChange} />
          </div>
          <div className="form-group">
            <label >Users (email addresses separated by line)</label>
            <textarea value={this.state.sharedUsers} onChange={this.handleUsersChange} className="form-control" rows="6"></textarea>
          </div>
          <div className="float-right align-self-end">
            <button onClick={this.onCancel} className="btn btn-outline-danger">Cancel</button>
            <input type="submit" className="btn btn-success ml-3" value="Save"></input>
          </div>
        </form>
      </div>
    )
  }
}

export default DocForm;