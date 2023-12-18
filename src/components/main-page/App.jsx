import React from "react";
import Header from "../partials/Header";
import Cover from "./Cover";
import Features from "./Features";
import Profile from "./Profile";
import Product from "./Product";
import Footer from "../partials/Footer";
import FAQSection from "./Faq";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div>
      <Header />
      <Cover />
      <Profile />
      <Features />
      <Product/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}

export default App;
