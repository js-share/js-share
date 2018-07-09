import React, { Component } from 'react';
import SyntaxHighlight from './SyntaxHighlight';


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
    let options = { lineNumbers: true, mode: 'javascript' };
    return (
      <div className='container'>
        <div className="card-group">
          <div className="card">
            <div class="card text-center">
              <div class="card-header">
                <ul class="nav nav-pills card-header-pills">
                  <li class="nav-item">
                    <a class="nav-link disabled" href="/documents">Cancel</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Save</a>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <h5 class="card-title">Document Title</h5>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Enter Code Here</h5>
              <p className="card-text" rows="12">{<SyntaxHighlight code={this.state.code} value='use strict' language='javascript' />}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card">
            <div class="card text-center">
              <div class="card-header">
                <ul class="nav nav-pills card-header-pills">
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Clear</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Run</a>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <h5 class="card-title">Console</h5>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Here is where the executed code will be displayed</h5>
              <p className="card-text">
                <SyntaxHighlight code={this.state.code} value='use strict' language='javascript' />
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditDoc;
