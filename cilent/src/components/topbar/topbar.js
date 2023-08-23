import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineSearch,
} from "react-icons/ai";

export const TopBar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="top-left">
        <AiFillFacebook className="top-icon" />
        <AiFillGithub className="top-icon" />
        <AiFillInstagram className="top-icon" />
      </div>
      <div className="top-center">
        <ul className="top-list">
          <Link className="link" to="/">
            <li className="top-list-item">Home </li>
          </Link>
          <Link className="link" to="/about">
            {" "}
            <li className="top-list-item">About</li>
          </Link>
          <Link className="link" to="/contact">
            {" "}
            <li className="top-list-item">Contact</li>
          </Link>
          <Link className="link" to="/write">
            {" "}
            <li className="top-list-item">Write</li>{" "}
          </Link>
          <li className="top-list-item">{user && "Log Out"}</li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <>
            <img
              className="top-img"
              src="https://images.unsplash.com/photo-1692653941602-04818c47f13a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="photo"
            />
          
          </>
        ) : (
          <>
          <ul className="top-list">
          <li className="top-list-item">
            <Link className="link" to="/login">
              Login
            </Link>
            </li>
            <li className="top-list-item">
            <Link className="link" to="/register">
              Register
            </Link>
            </li>
            </ul>
          </>
        )}
        <AiOutlineSearch className="top-search-icon" />
      </div>
    </div>
  );
};
