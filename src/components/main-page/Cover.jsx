import React from "react";
import myImage from '../assets/image/shopping.png';

function Cover() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={myImage}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="800"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Jastip tanpa perlu khawatir!
          </h1>
          <p className="lead">
            Jelajahi <span>JDB</span> Shop sekarang dan temukan cara baru untuk
            berbelanja secara global. Kami siap membantu Anda mewujudkan impian
            belanja Anda tanpa batas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cover;
