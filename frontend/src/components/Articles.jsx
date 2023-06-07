import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Spinner, Table, Container } from "react-bootstrap";
import Navigation from "./Navbar";
import checkToken from "../checkToken.js";
import jwt_decode from "jwt-decode";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkToken(setToken, setName, setExpire, navigate);
    getArticles();
  }, []);

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

  const getArticles = async () => {
    const response = await axios.get("http://localhost:5000/articles", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setArticles(response.data.data);
  };

  const deleteArticle = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/articles/${id}`);
      getArticles();
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
                        <th>Judul</th>
                        <th>Author</th>
                        <th>Content</th>
                        <th>Images</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {articles.length > 0 ? (
                        articles.map((article, index) => (
                          <tr key={article.id}>
                            <td>{index + 1}</td>
                            <td>{article.judul}</td>
                            <td>{article.author}</td>
                            <td>{article.content}</td>
                            <td>
                              {article.article_images.map((image) => (
                                <img
                                  key={image.id}
                                  src={image.imagePath}
                                  alt={`Gambar ${article.judul}`}
                                  style={{ width: "200px", height: "auto" }}
                                />
                              ))}
                            </td>
                            <td>
                              <Link
                                to={`edit/${article.id}`}
                                className="btn btn-success mb-2"
                                style={{ width: "80px" }}
                              >
                                Edit
                              </Link>
                              <button
                                onClick={() => deleteArticle(article.id)}
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
                          <td colSpan="6">No Articles found.</td>
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

export default Articles;
