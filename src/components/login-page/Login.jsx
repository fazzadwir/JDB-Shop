import React from "react";
import {useNavigate } from "react-router-dom";
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
import "../../style/login.css"
import shoppingImage from "../assets/image/girl-shop.jpg"

function Login() {
  const register = useNavigate();
  const admin = useNavigate();

  const handleAdminClick = () => {
    admin("/admin/dashboard");
  }

  const handleRegisterClick = () => {
    register("/register");
  }
  return (
    <MDBContainer className="my-5 login-container" >
      <MDBCard className="card-with-shadow">
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src={shoppingImage}
              alt="login form"
              className="login-card"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <span className="h2 fw-bold mb-0">Masuk dengan Akun JDB</span>
              </div>

              <h5
                className="fw-normal my-3 "
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>
              <div class="form-helper my-1">Email</div>
              <MDBInput
                placeholder="Email address"
                wrapperClass="mb-4"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <div class="form-helper my-1">Password</div>
              <MDBInput
                wrapperClass="mb-4"
                placeholder="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <MDBBtn className="mb-4 px-5" color="dark" size="lg">
                Login
              </MDBBtn>
              <a className="small text-muted" href="#!">
                Forgot password?
              </a>
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Belum punya akun?{" "}
                <a href="#!" onClick={handleRegisterClick} style={{ color: "#393f81" }}>
                  Buat akun JDB dulu !
                </a>
              </p>
              <MDBBtn onClick={handleAdminClick} className="mb-4 px-5" color="dark" size="lg">
                Admin check
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
