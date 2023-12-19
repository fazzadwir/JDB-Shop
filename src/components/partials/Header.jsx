import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Use the navigate function to navigate to the "/login" route
    navigate("/login");
  };

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          JDB SHOP
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="#" className="mx-2 nav-link nav-list" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="mx-2 nav-link nav-list">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="mx-2 nav-link nav-list">
              FAQs
            </Link>
          </li>
        </ul>
        <div className="mx-2 text-end">
          <button
            type="button"
            className="btn btn-outline-dark me-2"
            onClick={handleLoginClick}
          >
            Login
          </button>
          <Link to="/signup" className="btn btn-dark">
            Sign-up
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
