import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
export const Register = () => {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form">
        <label>User Name</label>
        <input
          className="register-input"
          type="text"
          placeholder="Enter your name ...."
          required
        />
        <label>Email</label>
        <input
          className="register-input"
          type="text"
          placeholder="Enter your email ...."
          required
        />
        <label>Password</label>
        <input
          className="register-input"
          type="password"
          placeholder="Enter your password ...."
          required
        />
        <button className="register-but">Register</button>
      </form>
  <Link to="/login">   <button className="login-but">Login</button></Link> 
    </div>
  );
};
