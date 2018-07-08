import React from 'react'

const MyDocs = () => (
  <div className="container">
    <h3>My Documents</h3>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Username</th>
          <th scope="col">Document Title</th>
          <th scope="col">Last Edited</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><button className="btn btn-sm btn-secondary">Edit Document</button></td>
          <td><button className="h-75 btn btn-md  btn-light" ><span role="img" aria-label="gear">⚙️ Permissions</span></button> </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><button className="btn btn-sm btn-secondary">Edit Document</button></td>
          <td><button className="h-75 btn btn-md  btn-light" ><span role="img" aria-label="gear">⚙️ Permissions</span></button> </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><button className="btn btn-sm btn-secondary">Edit Document</button></td>
          <td><button className="h-75 btn btn-md  btn-light" ><span role="img" aria-label="gear">⚙️ Permissions</span></button> </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default MyDocs;