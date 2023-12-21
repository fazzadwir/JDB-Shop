// src/components/Users.js
import React from "react";
import TableData from "./partials/TableData";
import Alert from "react-bootstrap/Alert";

function User() {
  const pageID = "user"
  return (
    <React.Fragment>
      <div className="container">
        <h2 className="h2">Users</h2>
        <p className="lead">
          Manage users here! you can Add, Edit, and Delete your user
        </p>
        <button type="button" class="btn btn-success mb-3" data-mdb-ripple-init>
          Add User
        </button>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama</th>
              <th scope="col">Email</th>
              <th scope="col">No Hp</th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>
            <TableData
              num="1"
              name="Kenzo"
              email="kenzo@gmail.com"
              phone="0811231225"
              pageID={pageID}
            />
            <TableData
              num="2"
              name="John"
              email="john@abc.com"
              phone="08782321u92"
              pageID={pageID}
            />
          </tbody>
        </table>
        {["danger"].map((variant) => (
          <Alert key={variant} variant={variant}>
            <strong>Perhatian !</strong> data user yang telah dihapus tidak dapat dikembalikan
          </Alert>
        ))}
      </div>
    </React.Fragment>
  );
}

export default User;
