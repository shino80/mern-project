import React from "react";
import "./header.css";
export const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <span className="header-titlesm">Welcome my blog</span>
        <span className="header-titlelg">Goraku</span>
      </div>
      <img
        className="header-img"
        src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2796&q=80"
        alt=""
      />
    </div>
  );
};
