import React from 'react';
import { Link } from 'react-router-dom';

const renderDocs = (myDocs) => {
  return myDocs.map((doc) => (
    <tr key={doc.doc_id}>
      <td>{doc.owner}</td>
      <td>{doc.name}</td>
      <td>{doc.last_updated}</td>
      <td><Link to={'/editdoc/' + doc.doc_id} className="btn btn-sm btn-secondary">Edit Document</Link></td>
      <td><Link to={'/settings/' + doc.doc_id} className=" btn btn-md btn-light" ><span role="img" aria-label="gear">⚙️ Permissions</span></Link> </td>
    </tr>
  ))
} 
const MyDocs = (props) => (
  <div className="container">
    <h3>My Documents</h3>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Document Title</th>
          <th scope="col">Last Edited</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>{renderDocs(props.myDocs)}</tbody>
    </table>
  </div>
);

export default MyDocs;