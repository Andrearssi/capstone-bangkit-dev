// tokenUtils.js

import axios from "axios";
import jwt_decode from "jwt-decode";

const checkToken = async (setToken, setName, setExpire, navigate) => {
  try {
    const response = await axios.get("http://localhost:5000/token");
    setToken(response.data.accessToken);
    const decoded = jwt_decode(response.data.accessToken);
    setName(decoded.name);
    setExpire(decoded.exp);
  } catch (error) {
    if (error.response) {
      navigate('/');
    }
  }
};

export default checkToken;
