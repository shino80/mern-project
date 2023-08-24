import React, { useContext, useRef} from "react";
import "./login.css";
import { Link ,useNavigate} from "react-router-dom";
import { Context } from "../../../context/Context";
import axios from "axios";
export const Login = () => {
  const navigate = useNavigate()
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate('/')
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>User name</label>
        <input
          className="login-input"
          type="text"
          placeholder="Enter your username...."
          ref={userRef}
          required
        />
        <label>Password</label>
        <input
          className="login-input"
          type="password"
          placeholder="Enter your password ...."
          ref={passwordRef}
          required
        />
        <button type="submit" className="login-button" disabled={isFetching}>
          Login
        </button>
      </form>
      <Link to="/register">
        {" "}
        <button className="register-button">Register</button>
      </Link>
    </div>
  );
};
