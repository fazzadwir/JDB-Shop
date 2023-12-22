import React from "react";
import { Link } from "react-router-dom";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function TableProduct(props) {
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
        <td>{props.category}</td>
        <td>{props.sku}</td>
        <td>{props.quantity}</td>
        <td>{props.picture}</td>
        {/* Update Route */}
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
        {/* Delete Route */}
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
      </tr>
    </React.Fragment>
  );
}

export default TableProduct;
