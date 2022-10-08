import "./login.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../contextAPI/AuthContext.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };
  return (
    <div className="login">
      <div className="loginContainer">
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
          className="loginInput"
        ></input>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="loginInput"
        ></input>
        <button disabled={loading} onClick={handleLogin} className="loginBtn">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
