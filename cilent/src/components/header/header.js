import React from "react";
import "./header.css";
export const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <span className="header-titlesm"> Just Feeling</span>
        <span className="header-titlelg"> Goraku</span>
      </div>
      <img
        className="header-img"
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80"
        alt=""
      />
    </div>
  );
};
