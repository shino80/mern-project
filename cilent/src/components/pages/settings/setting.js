import React, { useContext, useState } from "react";
import "./setting.css";
import { SideBar } from "../../sidebar/sidebar";
import { AiOutlineUser } from "react-icons/ai";
import { Context } from "../../../context/Context";
import axios from "axios";
export const Setting = () => {
  const PF = 'http://localhost:8000/images/'
  const { user,dispatch} = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    dispatch({type:'UPDATE_START'})
    e.preventDefault();
    const updatedUser = { email, username, password, userId: user._id };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.put(`/users/${user._id}`, updatedUser);
      dispatch({type:'UPDATE_SUCCESS',payload:res.data})
      setSuccess(true);
    } catch (error) {
      dispatch({type:'UPDATE_FAILURE'})
      console.log(error);
    }
  };
  return (
    <div className="setting">
      <div className="setting-wrapper">
        <div className="setting-title">
          <span className="setting-update-title">Update your account</span>
          <span className="setting-delete-title">Delete your account</span>
        </div>
        <form className="setting-form" onSubmit={handleSubmit}>
          <label>Proflie Picture</label>
          <div className="setting-pp">
            <img
              className="setting-img"
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="file-input">
              <AiOutlineUser className="setting-icon" />
            </label>
          </div>
          <input
            type="file"
            id="file-input"
            style={{ display: "none" }}
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <label> User Name</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="setting-button">
            Update
          </button>
          {success && (
            <span
              style={{
                color: "green",
                textAlign: "center",
                marginTop: "20px",
                fontSize: "20px",
              }}
            >
              Update success !
            </span>
          )}
        </form>
      </div>
      <SideBar />
    </div>
  );
};
