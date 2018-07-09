import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LiveEditor from './LiveEditor';

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
      code: sampleCode
    };

    this.updateCode = this.updateCode.bind(this);
  }
  updateCode(newCode) { this.setState({ code: newCode }) }

  render() {
    // let options = { lineNumbers: true, mode: 'javascript' };
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
                <h5 className="card-title">Document Title</h5>
              </div>
            </div>
            <div className="card-body">
              <LiveEditor />
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
              <div className="card-text">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditDoc;
