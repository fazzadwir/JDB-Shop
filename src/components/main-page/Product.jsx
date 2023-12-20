import React from "react";
import Card from "./partials/Card";
import donutImage from "./partials/assets-partials/images/donuts.jpg";
import clothesImage from "./partials/assets-partials/images/clothes.jpg";
import furnitureImage from "./partials/assets-partials/images/furnitur.jpg";

function Product() {
  return (
    <div className="container px-4 py-3" id="custom-cards">
      <h2 className="pb-2 fw-bold text-body-emphasis">
        Apa Saja Produk yang ditawarkan <span className="jdb">JDB</span>?
      </h2>

      <div className="row row-cols-3  row-cols-lg-3 align-items-stretch g-4 py-5">
        <Card
          cardTitle="Makanan yang enak dan lezat !"
          cardCategory="Foods and Beverages"
          imageUrl={donutImage}
        />
        <Card
          cardTitle="Pakaian Berkualitas, Jastip Tanpa Kompromi."
          cardCategory="Clothes"
          imageUrl={clothesImage}
        />
        <Card
          cardTitle="Upgrade ruang dengan perabotan keren!"
          cardCategory="Furnitures"
          imageUrl={furnitureImage}
        />
      </div>
    </div>
  );
}

export default Product;
