import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import GppGoodIcon from "@mui/icons-material/GppGood";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

function Features() {
  return (
    <div className="container px-4 py-5">
      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div className="col d-flex flex-column align-items-start gap-2">
          <h2 className="fw-bold text-body-emphasis">
            Left-aligned title explaining these awesome features
          </h2>
          <p className="text-body-secondary">
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" className="btn btn-primary btn-lg">
            Primary button
          </a>
        </div>

        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            {[
              { icon: <AccessTimeIcon />, title: "Jastip bakal tepat waktu" },
              { icon: <AutorenewIcon />, title: "Pemesanan flexible" },
              { icon: <GppGoodIcon />, title: "Kualitas Terjamin!" },
              { icon: <FmdGoodIcon />, title: "Gratis Antar!" },
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
                  Paragraph of text beneath the heading to explain the heading.
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
