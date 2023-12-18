import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          ></a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            Copyright©{date}
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.instagram.com/jastipdibia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://api.whatsapp.com/send?phone=%2B6287822837233"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
