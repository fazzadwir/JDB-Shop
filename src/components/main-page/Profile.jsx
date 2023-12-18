import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Profile() {
  return (
    <div className="my-1">
      <div className="p-5 text-center ">
        <div className="container py-5">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Apa itu <span className="jdb">JDB</span> Shop?
          </h1>
          <p className="col-lg-8 mx-auto lead">
            <span className="jdb">JDB</span> Shop adalah layanan jasa titip
            barang yang menyediakan solusi terbaik untuk kebutuhan belanja Anda.
            Dengan kami, Anda dapat dengan mudah mendapatkan produk impor
            favorit tanpa harus repot. Nikmati pengalaman belanja internasional
            tanpa batas!
          </p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
