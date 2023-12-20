import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Profile() {
  return (
    <div className="">
      <div className="p-5 text-center ">
        <div className="container">
          <h2 className="display-5 fw-bold text-body-emphasis lh-1 mb-4">
            Apa itu <span className="jdb">JDB</span> Shop?
          </h2>
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
