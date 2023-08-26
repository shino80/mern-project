import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";
export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };

  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          className="register-input"
          type="text"
          placeholder="Enter your name ...."
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          className="register-input"
          type="text"
          placeholder="Enter your email ...."
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          className="register-input"
          type="password"
          placeholder="Enter your password ...."
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="register-but">
          Register
        </button>
      </form>
      <Link to="/login">
        {" "}
        <button className="login-but">Login</button>
      </Link>
      {err && <span className="err">Some thing wrong !</span>}
    </div>
  );
};
