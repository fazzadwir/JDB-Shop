import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Contact() {
  return (
    <div className="container my-5 text-center">
      <h2 className="fw-bold text-body-emphasis"> Contact Us !</h2>
      <p className="">Masih ada pertanyaan? Yuk hubungi kami 😁</p>
      <div>
        <a
          type="button"
          className="whatsapp-btn"
          data-mdb-ripple-init
          href="https://api.whatsapp.com/send?phone=%2B6287822837233"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon style={{ marginRight: '8px' }} /> Contact us Via Whatsapp
        </a>
      </div>
    </div>
  );
}

export default Contact;
