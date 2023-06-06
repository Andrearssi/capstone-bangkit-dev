import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Modal,
  Form,
  FormControl,
} from "react-bootstrap";

const LogoutModal = ({ showModal, isLoading, confirmLogout, cancelLogout }) => {
  return (
    <Modal show={showModal} onHide={cancelLogout}>
      <Modal.Header closeButton>
        <Modal.Title>Logout Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure want to logout?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={cancelLogout}>
          Cancel
        </Button>
        <Button variant="danger" onClick={confirmLogout} disabled={isLoading}>
          {isLoading ? "Loading..." : "Logout"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const Navigation = () => {
  const navigate = useNavigate();

  // menambahkan state untuk menampilkan modal dan loading
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function confirmLogout() {
    try {
      setIsLoading(true); // menampilkan loading setelah pengguna mengkonfirmasi logout
      await axios.delete("http://localhost:5000/logout");
      setIsLoading(false); // menyembunyikan loading jika request berhasil
      setShowModal(false); // menyembunyikan modal setelah logout berhasil
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  function handleLogout() {
    setShowModal(true); // menampilkan modal konfirmasi ketika tombol logout diklik
  }

  function cancelLogout() {
    setShowModal(false); // menyembunyikan modal konfirmasi ketika pengguna membatalkan logout
  }

  return (
    <Navbar bg="light" expand="lg" className="container">
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
          <Nav.Link href="#" onClick={handleLogout}>
            <Button variant="danger" className="ml-2">
              Logout
            </Button>
          </Nav.Link>
        </Form>
      </Navbar.Collapse>

      {/* menampilkan modal konfirmasi hanya jika `showModal` bernilai `true` */}
      <LogoutModal
        showModal={showModal}
        isLoading={isLoading}
        confirmLogout={confirmLogout}
        cancelLogout={cancelLogout}
      />
    </Navbar>
  );
};

export default Navigation;
