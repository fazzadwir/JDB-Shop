import React from "react";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

function Profile() {
  return (
    <div className="my-5">
      <div className="p-5 text-center bg-body-tertiary">
        <div className="container py-5">
          <h1 className="text-body-emphasis">
            <span id="logo">JDB Shop <CardGiftcardIcon sx={{ fontSize: 100 }} /></span>
          </h1>
          <p className="col-lg-8 mx-auto lead">
            JDB Shop adalah layanan jasa titip barang yang menyediakan solusi
            terbaik untuk kebutuhan belanja Anda. Dengan kami, Anda dapat dengan
            mudah mendapatkan produk impor favorit tanpa harus repot. Nikmati
            pengalaman belanja internasional tanpa batas!
          </p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
