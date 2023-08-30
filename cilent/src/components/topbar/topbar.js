import React, { useContext } from "react";
import "./topbar.css";
import { Link, useNavigate } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineSearch,
} from "react-icons/ai";
import { Context } from "../../context/Context";

export const TopBar = () => {
  const PF = "https://goraku-blog.onrender.com/images/";
  const navigate = useNavigate();
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className="top">
      <div className="top-left">
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
      <div className="top-center">
        <ul className="top-list">
          <Link className="link" to="/">
            <li className="top-list-item">ホーム</li>
          </Link>
          <Link className="link" to="/about">
            {" "}
            <li className="top-list-item">概要</li>
          </Link> 
           <Link className="link" to="/contact">
            {" "}
            <li className="top-list-item">問い合わせ</li>
          </Link> 
          {user ? (
            <Link className="link" to="/write">
              {" "}
              <li className="top-list-item">ブログ投稿</li>{" "}
            </Link>
          ) : null}
          <li className="top-list-item" onClick={handleLogout}>
            {user && "ログアウト"}
          </li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <>
            <Link to="/setting">
              <img className="top-img" src={PF + user.profilePic} alt="photo" />
            </Link>
          </>
        ) : (
          <>
            <ul className="top-list">
              <li className="top-list-item">
                <Link className="link" to="/login">
                  ログイン
                </Link>
              </li>
              <li className="top-list-item">
                <Link className="link" to="/register">
                  新規登録
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
