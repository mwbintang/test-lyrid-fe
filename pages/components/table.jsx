import React from "react";

const Table = () => {
  return (
    <div className="container mt-5 ml-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>User</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td>Admin</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Bob Johnson</td>
            <td>bob@example.com</td>
            <td>User</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
