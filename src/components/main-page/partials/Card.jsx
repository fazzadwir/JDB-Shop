// Card.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Card(props) {
  return (
    <div className="col">
      <div
        className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
          backgroundSize: "cover", // Set background size to cover
        }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 position-relative">
          <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
            {props.cardTitle}
          </h3>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="d-flex align-items-end position-absolute bottom-0 end-0">
              <small className="px-5 pb-3">{props.cardCategory}</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
