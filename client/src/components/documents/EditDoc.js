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
        <h3 className="p-20">Edit Document</h3>
        <table className='table table-striped'>
          <thead className="float-right p-2">
            <button className="m-2 btn btn-danger">Back</button>
            <button className="m-2 btn btn-success">Run</button>
            <button className="m-2 btn btn-primary">Save</button>
          </thead>
          <textarea rows="4" cols="50">
            Enter Your Text Here
          </textarea>
          <textarea rows="4" cols="50">{'Console Log'}</textarea>
        </table>
        <SyntaxHighlight code={this.state.code} value='use strict' language='javascript' />
      </div>
    )
  }
}

export default EditDoc;
