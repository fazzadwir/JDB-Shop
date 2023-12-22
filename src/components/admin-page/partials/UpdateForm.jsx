import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import Dropdown from "react-bootstrap/Dropdown";
import "../../../style/login.css";

function UpdateForm() {
  return (
    <MDBContainer className="login-container">
      <MDBCard className="card-with-shadow">
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <span className="h2 fw-bold">Update Order</span>
              </div>
              <div className="form-helper my-1">Nama</div>
              <MDBInput
                placeholder="Nama"
                wrapperClass="mb-4"
                id="formControlLg"
                type="text"
                size="lg"
              />
              <div className="form-helper my-1">Order</div>
              <MDBInput
                placeholder="Order"
                wrapperClass="mb-4"
                id="formControlLg"
                type="text"
                size="lg"
              />
              <div className="form-helper my-1">Kuantitas</div>
              <MDBInput
                placeholder="Kuantitas"
                wrapperClass="mb-4"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <div className="form-helper my-1">Status</div>
              <Dropdown className="mb-3">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Update Status
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Menunggu Pembayaran</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Diproses</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Dikirim</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Selesai</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="form-helper my-1">Nomor HP</div>
              <MDBInput
                wrapperClass="mb-4"
                placeholder="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <MDBBtn className="mb-4 px-5" color="dark" size="lg">
                Update
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default UpdateForm;
