import React from 'react'

const MyDocs = () => (
  <div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Username</th>
          <th scope="col">Doc Title</th>
          <th scope="col">Last Edited</th>
          <th scope="col">Edit Settings</th>
          <th scope="col">Edit Document</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>{"Jacob"}</td>
          <td>{"Thornton"}</td>
          <td>{"fat"}</td>
          <td>{"fat"}</td>
          <td>{"fat"}</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default MyDocs;