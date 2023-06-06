import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navbar";
import { Spinner, Table, Container } from "react-bootstrap";
import checkToken from "../checkToken.js";
import jwt_decode from "jwt-decode";


const Dashboard = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [users, setUsers] = useState([]);
  const [expire, setExpire] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkToken(setToken, setName, setExpire, navigate);
    getUsers();
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

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axiosJWT.get("http://localhost:5000/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
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
                  <Table>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.length > 0 ? (
                        users.map((user, index) => (
                          <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                              <Link to={`edit/${user.id}`} className="btn btn-success me-2">
                                Edit
                              </Link>
                              <button onClick={() => deleteUser(user.id)} className="btn btn-danger">
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3">No users found.</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </Container>
              </>
            )}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Dashboard;
