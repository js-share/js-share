import React from 'react';
import { Link } from 'react-router-dom';

const renderDocs = (myDocs) => {
  return myDocs.map((doc) => {
    const {user_name, doc_id, doc_name, last_updated} = doc;
    return (
    <tr key={doc_id}>
      <td>{user_name}</td>
      <td>{doc_name}</td>
      <td>{last_updated}</td>
      <td><Link to={'/editdoc/' + doc_id} className="btn btn-sm btn-primary">Edit Document</Link></td>
      <td><Link to={'/settings/' + doc_id} className=" btn btn-md btn-light" ><span role="img" aria-label="gear">⚙️ Permissions</span></Link> </td>
    </tr>
  )})
}

const MyDocs = (props) => (
  <div className="container">
    <h3 className="text-info">My Documents</h3>
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