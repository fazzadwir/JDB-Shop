import React from "react";
import { Link } from "react-router-dom";
import "../../style/admin.css";

function Sidebar({ activeSection, handleSectionClick }) {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"
      style={{ width: "280px", minHeight: "100vh"}}
    >
      <div className="sticky-top pt-3">
        <a
          href="/admin/dashboard"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="px-3 fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link
              to="/admin/dashboard"
              className={`nav-link ${
                activeSection === "dashboard" ? "active" : ""
              }`}
              onClick={() => handleSectionClick("dashboard")}
            >
              Dashboard
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to="/admin/orders"
              className={`nav-link ${
                activeSection === "orders" ? "active" : ""
              }`}
              onClick={() => handleSectionClick("orders")}
            >
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/admin/users"
              className={`nav-link ${
                activeSection === "users" ? "active" : ""
              }`}
              onClick={() => handleSectionClick("users")}
            >
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/admin/product"
              className={`nav-link ${
                activeSection === "product" ? "active" : ""
              }`}
              onClick={() => handleSectionClick("product")}
            >
              Produk
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/admin/update-product"
              className={`nav-link ${
                activeSection === "update" ? "active" : ""
              }`}
              onClick={() => handleSectionClick("update")}
            >
              Update
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
    </nav>
  );
}

export default Sidebar;
