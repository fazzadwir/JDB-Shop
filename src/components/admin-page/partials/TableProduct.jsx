import React from "react";

function TableProduct(props) {
  return (
    <React.Fragment>
      <tr>
        <th scope="row">{props.num}</th>
        <td>{props.name}</td>
        <td>{props.category}</td>
        <td>{props.sku}</td>
        <td>{props.quantity}</td>
        <td>{props.picture}</td>
        <button type="button" class="btn btn-link btn-sm btn-rounded">
          Update
        </button>
        {props.pageID === "order" ? null : <button type="button" class="btn btn-link btn-sm btn-rounded">
          Delete
        </button>}
      </tr>
    </React.Fragment>
  );
}

export default TableProduct;
