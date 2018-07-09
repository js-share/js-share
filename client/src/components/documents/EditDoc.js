import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CM from './CodeMirror';
import ConsoleOutput from './ConsoleOutput';

const sampleCode = `const renderDocs = (sharedDocs) => {
  return sharedDocs.map((doc) => (
    <tr key={doc.doc_id}>
      <td>{doc.owner}</td>
      <td>{doc.name}</td>
      <td>{doc.last_updated}</td>
      <td><Link to={'/editdoc/' + doc.doc_id} className="btn btn-sm btn-secondary">Edit Document</Link></td>
      <td><Link to={'/settings/' + doc.doc_id} className=" btn btn-md btn-light" ><span role="img" aria-label="gear">⚙️ Permissions</span></Link> </td>
    </tr>
  ))
}`

class EditDoc extends Component {
  constructor(props) {
    super(props)
    this.state = {
      init: false,
      code: sampleCode,
      docTitle: ''
    };

    this.updateCode = this.updateCode.bind(this);
  }
  updateCode(newCode) { this.setState({ code: newCode }) }

  componentDidMount() {
    let docId = this.props.location.pathname.slice(9);
    console.log(docId)
    // if docId make axios get request to server for docTitle and sharedUsers
    axios.get(`/api/document/${docId}`)
      .then(res => {
        this.setState({
          init: true,
          docTitle: res.data.name
        });
      }).catch(err => console.log(err));
  }

  render() {
    // let options = { lineNumbers: true, mode: 'javascript' };
    if (!this.state.init) return null;
    return (
      <div className='container'>
        <div className="card-group">
          <div className="card">
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                  <li className="nav-item">
                    <Link className="nav-link disabled" to="/documents">Cancel</Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link active">Save</button>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h5 className="card-title">{this.state.docTitle}</h5>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Enter Code Here</h5>
              <div className="card-text" rows="12">{<CM code={this.state.code} value='use strict' language='javascript' />}</div>
            </div>

          </div>
          <div className="card">
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                  <li className="nav-item">
                    <button className="nav-link disabled">Clear</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link active">Run</button>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h5 className="card-title">Console</h5>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">JS</h5>
              <div className="card-text" rows="12">{<ConsoleOutput code={'RESULTS'} value='use strict' language='javascript' />}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditDoc;
