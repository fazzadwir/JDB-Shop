import React from "react";
import bootstrap from "bootstrap";

function Header() {
  return (
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            {" "}
            JDB SHOP
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" className="mx-2 nav-link" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="mx-2 nav-link">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="mx -2 nav-link">
                FAQs
              </a>
            </li>
            <div class="mx-2 text-end">
              <button type="button" className="btn btn-outline-dark me-2">
                Login
              </button>
              <button type="button" className="btn btn-dark">
                Sign-up
              </button>
            </div>
          </ul>
        </header>
      </div>
  );
}

export default Header;
