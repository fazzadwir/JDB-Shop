// Admin.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dahsboard";
import User from "./User";
import Order from "./Order";
import Sidebar from "./Sidebar";
import "../../style/admin.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function Admin() {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<User />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
