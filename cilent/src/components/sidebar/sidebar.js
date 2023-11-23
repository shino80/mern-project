import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
// import axios from "axios";
import axios from "../../api/axios";
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
        <span className="sidebar-title">僕のこと</span>
        <img
          className="sidebar-img"
          src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="about-me">
          <p>Will Nguyen </p>
          <p>Keai University </p>
        </div>
      </div>
      {/* <div className="sidebar-item">
        <div className="sidebar-title"> カテゴリー</div>
        <ul className="sidebar-list">
          {cats.map((cat) => (
            <Link to={`/?cat=${cat.name}`} className="link">
              <li className="sidebar-list-item">{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div> */}
      <div className="sidebar-item">
        <span className="sidebar-title">フォローしてください</span>
        <div className="sidebar-social">
          <a href="https://www.facebook.com/profile.php?id=100015413019978">
            <AiFillFacebook className="sidebar-icon" />
          </a>
          <a href="https://github.com/shino80">
            <AiFillGithub className="sidebar-icon" />
          </a>
          <a href="https://www.linkedin.com/in/hoang-anh-nguyen-9ba389229/">
            <AiFillLinkedin className="sidebar-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
