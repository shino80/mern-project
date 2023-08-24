import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { AiFillFacebook, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
export const SideBar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      console.log(res.data);
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="side-bar">
      <div className="sidebar-item">
        <span className="sidebar-title">About me </span>
        <img
          className="sidebar-img"
          src="https://images.unsplash.com/photo-1691580438246-a6e5cb35ca05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <p>lorem-ipsum.paragraph</p>
      </div>
      <div className="sidebar-item">
        <div className="sidebar-title"> Categories</div>
        <ul className="sidebar-list">
          {cats.map((cat) => (
            <Link to={`/?cat=${cat.name}`} className="link">
              <li className="sidebar-list-item">{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Follow us </span>
        <div className="sidebar-social">
          <AiFillFacebook className="sidebar-icon" />
          <AiFillGithub className="sidebar-icon" />
          <AiFillInstagram className="sidebar-icon" />
        </div>
      </div>
    </div>
  );
};
