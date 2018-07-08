import React, { Component } from 'react';
import axios from 'axios';

class CreateDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: null,
      docTitle: "",
      sharedUsers: null

    };
  }

  render() {

    function handleSubmit(event) {
      event.preventDefault();
      let doctitle = document.getElementById('doctitle').value;
      let sharedwith = document.getElementById('sharedwith').value;
      console.log(doctitle, sharedwith);
      document.getElementById('doctitle').value = '';
      document.getElementById('sharedwith').value = '';
    }

    function handleCancel(event) {
      event.preventDefault();
      document.getElementById('doctitle').value = '';
      document.getElementById('sharedwith').value = '';
    }

    axios.post(
      '/api/createdoc', {
        'owner': 'sidhi',
        'name': this.doctitle,
        'text_content': this.doctext,
        'permitted_users': this.sharedwith
      })
      .then(
        (res) => console.log(res)
      )
      .catch(
        (err) => console.log(err)
      )

    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="doctitle">Document Title</label>
            <input type="text" className="form-control" id="doctitle" placeholder="Enter Document Title" />
          </div>
          <div className="form-group">
            <label htmlFor="doctext">Users (email addresses separated by line)</label>
            <textarea className="form-control" id="sharedwith" rows="4"></textarea>
          </div>
          <div className="float-right align-self-end">
            <button onClick={handleCancel} className="btn btn-outline-danger">Cancel</button>
            <button onClick={handleSubmit} className="btn btn-success ml-3">Save</button>
          </div>
        </form>
      </div>

    )
  }

}

export default CreateDoc;