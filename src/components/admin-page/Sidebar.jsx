// src/components/Sidebar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className={`nav-item ${activeSection === "home" ? "active" : ""}`}>
          <Link
            to="/admin"
            className={`nav-link ${activeSection === "home" ? "active" : ""}`}
            onClick={() => handleSectionClick("home")}
          >
            Home
          </Link>
        </li>
        <li
          className={`nav-item ${
            activeSection === "dashboard" ? "active" : ""
          }`}
        >
          <Link
            to="/admin/dashboard"
            className={`nav-link ${activeSection === "dashboard" ? "active" : ""}`}
            onClick={() => handleSectionClick("dashboard")}
          >
            Dashboard
          </Link>
        </li>
        <li
          className={`nav-item ${activeSection === "orders" ? "active" : ""}`}
        >
          <Link
            to="/admin/orders"
            className={`nav-link ${activeSection === "orders" ? "active" : ""}`}
            onClick={() => handleSectionClick("orders")}
          >
            Orders
          </Link>
        </li>
        <li className={`nav-item ${activeSection === "users" ? "active" : ""}`}>
          <Link
            to="/admin/users"
            className={`nav-link ${activeSection === "users" ? "active" : ""}`}
            onClick={() => handleSectionClick("users")}
          >
            Users
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src=""
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Admin</strong>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;