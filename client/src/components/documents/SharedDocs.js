import React from 'react'
import { Link } from 'react-router-dom';

const renderDocs = (sharedDocs) => {
  return sharedDocs.map((doc) => { 
    const { user_name, doc_id, name, last_updated } = doc;
    return (
      <tr key={doc_id}>
        <td>{user_name}</td>
        <td>{name}</td>
        <td>{last_updated}</td>
        <td><Link to={'/editdoc/' + doc.doc_id} className="btn btn-sm btn-primary">Edit Document</Link></td>
        <td></td>
      </tr>
    )
  })
}

const SharedDocs = (props) => (
  <div className="container">
    <h3 className="text-info">Shared Documents</h3>
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