import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navbar";
import {
  Spinner,
  Table,
  Container,
  Modal,
  Form,
  Button,
} from "react-bootstrap";
import checkToken from "../checkToken.js";
import jwt_decode from "jwt-decode";

const Tengkulaks = () => {
  const [tengkulaks, setTengkulaks] = useState([]);
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [newTengkulak, setnewTengkulak] = useState({
    nama: "",
    alamat: "",
    no: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    checkToken(setToken, setName, setExpire, navigate);
    getTengkulaks();
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

  const getTengkulaks = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/tengkulaks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTengkulaks(response.data.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleCreateTengkulak = async (e) => {
    e.preventDefault();
    try {
      await axiosJWT.post("http://localhost:5000/tengkulaks", newTengkulak, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setnewTengkulak({
        nama: "",
        alamat: "",
        no: "",
      });
      setCreateModal(false);
      getTengkulaks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTengkulak = async (id) => {
    try {
      await axiosJWT.delete(`http://localhost:5000/tengkulaks/${id}`);
      getTengkulaks();
    } catch (error) {
      console.log(error);
    }
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
                    onClick={() => setCreateModal(true)}
                  >
                    Create Tengkulak
                  </Button>
                  <Table>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Nomor WA</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tengkulaks.length > 0 ? (
                        tengkulaks.map((tengkulak, index) => (
                          <tr key={tengkulak.id}>
                            <td>{index + 1}</td>
                            <td>{tengkulak.nama}</td>
                            <td>{tengkulak.alamat}</td>
                            <td>{tengkulak.no}</td>
                            <td>
                              <Button
                                variant="success"
                                onClick={() => setEditModal(true)}
                              >
                                Edit
                              </Button>
                              <Button
                                variant="danger"
                                onClick={() => setEditModal(true)}
                              >
                                Edit
                              </Button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="text-center">
                            No tengkulaks found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </Container>
              </>
            )}
          </div>
          <Modal show={createModal} onHide={() => setCreateModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Create Tengkulak</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleCreateTengkulak}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={newTengkulak.nama}
                    onChange={(e) =>
                      setnewTengkulak({ ...newTengkulak, nama: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formAlamat">
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter alamat"
                    value={newTengkulak.alamat}
                    onChange={(e) =>
                      setnewTengkulak({
                        ...newTengkulak,
                        alamat: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formNo">
                  <Form.Label>Nomor WA</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter number WA"
                    value={newTengkulak.no}
                    onChange={(e) =>
                      setnewTengkulak({ ...newTengkulak, no: e.target.value })
                    }
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Create
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal show={editModal} onHide={() => setEditModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Create Tengkulak</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleCreateTengkulak}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={newTengkulak.nama}
                    onChange={(e) =>
                      setnewTengkulak({ ...newTengkulak, nama: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formAlamat">
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter alamat"
                    value={newTengkulak.alamat}
                    onChange={(e) =>
                      setnewTengkulak({
                        ...newTengkulak,
                        alamat: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formNo">
                  <Form.Label>Nomor WA</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter number WA"
                    value={newTengkulak.no}
                    onChange={(e) =>
                      setnewTengkulak({ ...newTengkulak, no: e.target.value })
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

export default Tengkulaks;
