import React from "react";
import "./setting.css";
import { SideBar } from "../../sidebar/sidebar";
import { AiOutlineUser } from "react-icons/ai";
export const Setting = () => {
  return (
    <div className="setting">
      <div className="setting-wrapper">
        <div className="setting-title">
          <span className="setting-update-title">Update your account</span>
          <span className="setting-delete-title">Delete your account</span>
        </div>
        <form className="setting-form">
          <label>Proflie Picture</label>
          <div className="setting-pp">
            <img
              className="setting-img"
              src="https://images.unsplash.com/photo-1692343814412-cbe23ff32765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
            <label htmlFor="file-input">
              <AiOutlineUser className="setting-icon" />
            </label>
          </div>
          <input type="file" id="file-input" style={{ display: "none" }} />
          <label> User Name</label>
          <input type="text" placeholder="Will" />
          <label>Email</label>
          <input type="email" placeholder="will@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="" />
          <button className="setting-button">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};
