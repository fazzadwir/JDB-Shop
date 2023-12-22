// src/components/Dashboard.js
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Dashboard({ activeSection, handleSectionClick }) {
  const tanggal = new Date();
  const fullDate =
    tanggal.getDate().toString().padStart(2, "0") +
    "-" +
    (tanggal.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    tanggal.getFullYear() +
    " ";
  const waktu = new Date().getHours();
  let greeting = "Selamat Pagi";
  if (waktu < 11) {
    greeting = "Selamat Pagi";
  } else if (waktu < 15) {
    greeting = "Selamat Siang";
  } else if (waktu < 18) {
    greeting = "Selamat Sore";
  } else {
    greeting = "Selamat Malam";
  }

  return (
    <React.Fragment>
      <div className="container">
        <h2>Dashboard</h2>
        <p className="lead">Welcome to the admin dashboard!</p>
      </div>
      <div className="text-end">
        <h5 className="h5">{fullDate}</h5>
      </div>
      <Card>
        <Card.Header>{greeting} Min !</Card.Header>
        <Card.Body>
          <Card.Title>Semangat jualanya yah !</Card.Title>
          <Card.Text>
            Coba cek Order Tab, siapa tau ada orderan baru !
          </Card.Text>
          <Button>
            <Link
              to="/admin/orders"
              className={`nav-link ${
                activeSection === "orders" ? "active" : ""
              }`}
              onClick={() => handleSectionClick("orders")}
            >
              Orders
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default Dashboard;
