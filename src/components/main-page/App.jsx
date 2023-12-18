import React from "react";
import Header from "../partials/Header";
import Cover from "./Cover";
import Features from "./Features";
import Profile from "./Profile";
import Product from "./Product";
import Footer from "../partials/Footer";

function App() {
  return (
    <div>
      <Header />
      <Cover />
      <Profile />
      <Features />
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
