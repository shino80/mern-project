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
        <span className="sidebar-title">僕のこと</span>
        <img
          className="sidebar-img"
          src="https://scontent-nrt1-2.xx.fbcdn.net/v/t39.30808-6/317887204_1471504000040020_7351981800870923716_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lqVbwPOwa_kAX8CQRdj&_nc_ht=scontent-nrt1-2.xx&oh=00_AfCrR1RUjqIjiBsyoXV0G4CXAz-WTsuiO-6L0JEV7uuSzQ&oe=64EF58BF"
          alt=""
        />
        <p>Will Nguyen</p>
      </div>
      <div className="sidebar-item">
        <div className="sidebar-title"> カテゴリー</div>
        <ul className="sidebar-list">
          {cats.map((cat) => (
            <Link to={`/?cat=${cat.name}`} className="link">
              <li className="sidebar-list-item">{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">フォローしてください</span>
        <div className="sidebar-social">
          <AiFillFacebook className="sidebar-icon"  href="https://www.facebook.com/profile.php?id=100015413019978"/>
          <AiFillGithub className="sidebar-icon"  href="https://github.com/shino80"/>
          <AiFillInstagram className="sidebar-icon"  href="https://www.instagram.com/" />
        </div>
      </div>
    </div>
  );
};
