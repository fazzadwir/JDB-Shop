import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import "../../style/login.css";
import registerIMG from "../assets/image/register.jpg";

function Register() {
  const loginPage = useNavigate();

  const handleLoginClick = () => {
    loginPage("/login");
  };
  return (
    <MDBContainer className="my-5 login-container">
      <MDBCard className="card-with-shadow">
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src={registerIMG}
              alt="login form"
              className="login-card"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <span className="h2 fw-bold mb-0">Buat akun JDB Baru!</span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Create new account
              </h5>

              <div class="form-helper my-1">Nama</div>
              <MDBInput
                placeholder="Nama"
                wrapperClass="mb-4"
                id="formControlLg"
                type="nama"
                size="lg"
              />
              <div class="form-helper my-1">Email</div>
              <MDBInput
                placeholder="Email"
                wrapperClass="mb-4"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <div class="form-helper my-1">Nomor HP</div>
              <MDBInput
                placeholder="Nomor HP"
                wrapperClass="mb-4"
                id="formControlLg"
                type="no_hp"
                size="lg"
              />
              <div class="form-helper my-1">Password</div>

              <MDBInput
                placeholder="Password"
                wrapperClass="mb-4"
                id="formControlLg"
                type="password"
                size="lg"
              />
              <MDBBtn className="mb-4 px-5" color="dark" size="lg">
                Buat Akun Baru !
              </MDBBtn>
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Sudah punya akun JDB?{" "}
                <a
                  href="#!"
                  onClick={handleLoginClick}
                  style={{ color: "#393f81" }}
                >
                  Login pakai akun JDB!
                </a>
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;
