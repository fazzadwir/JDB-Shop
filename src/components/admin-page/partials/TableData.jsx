import React from "react";

function TableData(props) {
  return (
    <React.Fragment>
      <tr>
        <th scope="row">{props.num}</th>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <button type="button" class="btn btn-link btn-sm btn-rounded">
          Edit
        </button>
        <button type="button" class="btn btn-link btn-sm btn-rounded">
          Delete
        </button>
      </tr>
    </React.Fragment>
  );
}

export default TableData;
