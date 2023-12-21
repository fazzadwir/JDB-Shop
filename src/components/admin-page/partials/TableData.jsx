import React from "react";

function TableData(props) {
  return (
    <React.Fragment>
      <tr>
        <th scope="row">{props.num}</th>
        <td>{props.name}</td>
        <td>{props.email ? props.email : props.order}</td>
        {props.pageID === "order" ? <td>{props.quantity}</td> : null}
        {props.pageID === "order" ? (
          <td>
            <span className={`badge ${props.status} rounded-pill d-inline`}>
              {props.statusTitle}
            </span>
          </td>
        ) : null}
        <td>{props.phone}</td>
        <button type="button" class="btn btn-link btn-sm btn-rounded">
          Update
        </button>
        {props.pageID === "order" ? null : (
          <button type="button" class="btn btn-link btn-sm btn-rounded">
            Delete
          </button>
        )}
      </tr>
    </React.Fragment>
  );
}

export default TableData;
