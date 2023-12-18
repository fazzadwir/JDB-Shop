import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import GppGoodIcon from "@mui/icons-material/GppGood";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

function Features() {
  return (
    <div className="container px-4 py-3">
      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div className="col d-flex flex-column align-items-start gap-2">
          <h2 className="fw-bold text-body-emphasis">
            Mengapa Jastip di Kami?
          </h2>
          <p className="text-body-secondary">
            Karena kami tidak hanya sekadar jasa titip, tapi solusi lengkap
            untuk kebutuhan belanja Anda. Dengan layanan yang lebih dari sekadar
            antar barang, kami hadir dengan pengalaman belanja yang unik,
            praktis, dan menyenangkan. Kualitas, harga, dan kemudahan belanja
            bertemu dalam satu tempat. Pilih kami, temukan perbedaannya!"
          </p>
        </div>

        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            {[
              {
                icon: <AccessTimeIcon />,
                title: "Jastip bakal tepat waktu",
                paragraph:
                  "Jastip bersama kami, barang Anda pasti sampai di tujuan dengan tepat waktu.",
              },
              {
                icon: <AutorenewIcon />,
                title: "Pemesanan flexible",
                paragraph:
                  "Sesuaikan waktu dan kebutuhanmu, karena layanan kami dirancang untuk memudahkanmu sepenuhnya.",
              },
              {
                icon: <GppGoodIcon />,
                title: "Kualitas Terjamin!",
                paragraph:
                  "Jastip bukan cuma sekadar layanan, tapi juga jaminan kualitas barang yang terjamin.",
              },
              {
                icon: <FmdGoodIcon />,
                title: "Gratis Antar!",
                paragraph:
                  "Lebih mudah, lebih hemat, dan pastinya tanpa biaya antar.",
              },
            ].map((feature, index) => (
              <div className="col d-flex flex-column gap-2" key={index}>
                <div
                  className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3 p-3 m-0"
                  id="icon"
                >
                  {typeof feature.icon === "object" ? (
                    feature.icon
                  ) : (
                    <svg className="bi" width="2em" height="3em">
                      <use xlinkHref={`#${feature.icon}`}></use>
                    </svg>
                  )}
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  {feature.title}
                </h4>
                <p className="text-body-secondary">
                 {feature.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
