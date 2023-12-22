// Admin.jsx
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dahsboard";
import User from "./User";
import Order from "./Order";
import Product from "./Product";
import UpdateForm from "./partials/UpdateForm";
import Sidebar from "./Sidebar";
import "../../style/admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function Admin() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar
          activeSection={activeSection}
          handleSectionClick={handleSectionClick}
        />
        <div className="admin-content">
          <Routes>
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  activeSection={activeSection}
                  handleSectionClick={handleSectionClick}
                />
              }
            />
            <Route path="/users" element={<User />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/product" element={<Product />} />
            <Route path="/update-product" element={<UpdateForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin;
