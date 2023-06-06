import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navbar";
import { Spinner } from 'react-bootstrap';
import checkToken from "../checkToken.js";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkToken(setToken, setName, setExpire, navigate);
  }, [navigate]);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
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
                <h1 className="text-center">Welcome Back {name}</h1>
                <button onClick={getUsers}>Load Users</button>
              </>
            )}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Dashboard;
