import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form">
        <label>Email</label>
        <input
          className="login-input"
          type="text"
          placeholder="Enter your email ...."
          required
        />
        <label>Password</label>
        <input
          className="login-input"
          type="password"
          placeholder="Enter your password ...."
          required
        />
        <button className="login-button">Login</button>
      </form>
    <Link to='/register'>  <button className="register-button">Register</button></Link>
    </div>
  );
};
