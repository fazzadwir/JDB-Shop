import React from "react";
import TableProduct from "./partials/TableProduct";
import Alert from "react-bootstrap/Alert";

function Product() {
  return (
    <React.Fragment>
      <div className="container">
        <h2 className="h2">Product</h2>
        <p className="lead">
          Manage your product here! you can Add, Edit, and Delete your product
        </p>
        <button type="button" class="btn btn-success mb-3" data-mdb-ripple-init>
          Add Product
        </button>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama Product</th>
              <th scope="col">Kategori</th>
              <th scope="col">SKU</th>
              <th scope="col">Kuantitas</th>
              <th scope="col">Gambar</th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>
            <TableProduct
              num="1"
              name="Uniqlo Dry-Ex Jacket"
              category="Clothes"
              sku="UNi512345678"
              quantity="200"
              picture="contoh gambar"
            />
            <TableProduct
              num="1"
              name="Donut Dancow"
              category="Foods and Beverages"
              sku="FOD1234443123"
              quantity="10"
              picture="contoh gambar"
            />
          </tbody>
        </table>
        {["danger"].map((variant) => (
          <Alert key={variant} variant={variant}>
            <strong>Perhatian !</strong> data produk yang telah dihapus tidak
            dapat dikembalikan.
          </Alert>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Product;
