import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../partials/Header";
import Cover from "./Cover";
import Features from "./Features";
import Profile from "./Profile";
import Product from "./Product";
import Footer from "../partials/Footer";
import FAQSection from "./Faq";
import Contact from "./Contact";
import Login from "../login-page/Login";
import Register from "../login-page/Register";
import Admin from "../admin-page/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Cover />
              <Profile />
              <Features />
              <Product />
              <FAQSection />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route
          path="/admin/*"
          element={<Admin/>} 
        />
      </Routes>
    </Router>
  );
}

export default App;
