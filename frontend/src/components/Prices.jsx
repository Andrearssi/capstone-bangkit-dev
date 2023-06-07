import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Spinner,
  Table,
  Container,
  Modal,
  Form,
  Button,
} from "react-bootstrap";
import Navigation from "./Navbar";
import checkToken from "../checkToken.js";
import jwt_decode from "jwt-decode";
import numeral from "numeral";

const Prices = () => {
  const [prices, setPrices] = useState([]);
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [createModal, setcreateModal] = useState(false);
  const [newPrice, setnewPrice] = useState({
    provinsi: "",
    harga: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    checkToken(setToken, setName, setExpire, navigate);
    getPrices();
  }, [navigate]);

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        const decoded = jwt_decode(response.data.accessToken);
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getPrices = async () => {
    setLoading(true);
    try {
      const response = await axiosJWT.get("http://localhost:5000/prices", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPrices(response.data.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleCreatePrice = async (e) => {
    e.preventDefault();
    try {
      await axiosJWT.post("http://localhost:5000/prices", newPrice, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setnewPrice({
        harga: "",
        provinsi: "",
      });
      setcreateModal(false);
      getPrices();
    } catch (error) {
      console.log(error);
    }
  };

  const deletePrice = async (id) => {
    try {
      await axiosJWT.delete(`http://localhost:5000/prices/${id}`);
      getPrices();
    } catch (error) {
      console.log(error);
    }
  };

  const formatRupiah = (angka) => {
    return numeral(angka).format("0,0");
  };

  return (
    <>
      {token ? (
        <>
          <Navigation />
          <div>
            {isLoading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <>
                <Container>
                  <h1 className="text-center">Welcome Back {name}</h1>
                  <Button
                    variant="primary"
                    onClick={() => setcreateModal(true)}
                  >
                    Create User
                  </Button>
                  <Table>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Provinsi</th>
                        <th>Harga</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {prices.length > 0 ? (
                        prices.map((price, index) => (
                          <tr key={price.id}>
                            <td>{index + 1}</td>
                            <td>{price.provinsi}</td>
                            <td>Rp. {formatRupiah(price.harga)}</td>
                            <td>
                              <Link
                                to={`edit/${price.id}`}
                                className="btn btn-success me-2"
                                style={{ width: "80px" }}
                              >
                                Edit
                              </Link>
                              <button
                                onClick={() => deletePrice(price.id)}
                                className="btn btn-danger"
                                style={{ width: "80px" }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="text-center">No prices found.</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </Container>
              </>
            )}
          </div>
          <Modal show={createModal} onHide={() => setcreateModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Create User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleCreatePrice}>
                <Form.Group controlId="formProvinsi">
                  <Form.Label>Provinsi</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter province"
                    value={newPrice.provinsi}
                    onChange={(e) =>
                      setnewPrice({ ...newPrice, provinsi: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formHarga">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter price"
                    value={newPrice.harga}
                    onChange={(e) =>
                      setnewPrice({ ...newPrice, harga: e.target.value })
                    }
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Create
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </>
      ) : null}
    </>
  );
};

export default Prices;
