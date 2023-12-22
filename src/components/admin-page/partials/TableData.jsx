import React from "react";
import { Link } from "react-router-dom";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function TableData(props) {
  const renderUpdate = (item) => (
    <Tooltip id="button-tooltip" {...item}>
      Update
    </Tooltip>
  );
  const renderDelete = (item) => (
    <Tooltip id="button-tooltip" {...item}>
      Delete
    </Tooltip>
  );
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
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 150 }}
          overlay={renderUpdate}
        >
          <button type="button" className="btn btn-link btn-sm btn-rounded">
            <Link to={props.route}>
              <ChangeCircleIcon />
            </Link>
          </button>
        </OverlayTrigger>
        {props.pageID === "order" ? null : (
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 150 }}
            overlay={renderDelete}
          >
            <button type="button" className="btn btn-link btn-sm btn-rounded">
              <Link to={props.route}>
                <DeleteIcon />
              </Link>
            </button>
          </OverlayTrigger>
        )}
      </tr>
    </React.Fragment>
  );
}

export default TableData;
