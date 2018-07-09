import React from 'react'
import { Link } from 'react-router-dom';

const renderDocs = (sharedDocs) => {
  return sharedDocs.map((doc) => (
    <tr key={doc.doc_id}>
      <td>{doc.owner}</td>
      <td>{doc.name}</td>
      <td>{doc.last_updated}</td>
      <td><Link to={'/editdoc/' + doc.doc_id} className="btn btn-sm btn-secondary">Edit Document</Link></td>
      <td><Link to={'/settings/' + doc.doc_id} className=" btn btn-md btn-light" ><span role="img" aria-label="gear">⚙️ Permissions</span></Link> </td>
    </tr>
  ))
}

const SharedDocs = (props) => (
  <div className="container">
    <h3>Shared Documents</h3>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Doc Title</th>
          <th scope="col">Last Edited</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>{renderDocs(props.sharedDocs)}</tbody>
    </table>
  </div>
);

export default SharedDocs;