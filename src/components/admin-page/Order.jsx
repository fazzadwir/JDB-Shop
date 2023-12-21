import React from "react";
import TableData from "./partials/TableData";
import Alert from "react-bootstrap/Alert";

function Order() {
    const pageID = "order";
  return (
    <React.Fragment>
      <div className="container">
        <h2 className="h2">Orders</h2>
        <small className="lead">
          Manage Order here! you can update order status and more !
        </small>
        <br />
        <table class="table my-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama</th>
              <th scope="col">Order</th>
              <th scope="col">Kuantitas</th>
              <th scope="col">Status</th>
              <th scope="col">Phones Number</th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>
            <TableData
              num="1"
              name="Kenzo"
              order="Baju Gamis Anak"
              quantity="3 pcs"
              status="badge-warning"
              statusTitle="Waiting for payment"
              phone="0811231225"
              pageID={pageID}
            />
            <TableData
              num="2"
              name="John"
              order="Donut dancow"
              quantity="20 box"
              status="badge-success"
              statusTitle="Done"
              phone="08782321u92"
              pageID={pageID}
            />
          </tbody>
        </table>
        {["success"].map((variant) => (
          <Alert key={variant} variant={variant}>
            <strong>Perhatian !</strong> jangan lupa update status user apabila
            telah ada perubahan status order !
          </Alert>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Order;
