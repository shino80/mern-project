import React, { useContext, useEffect, useState } from "react";
import "./single-post.css";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";

export const SinglePost = () => {
  const PF = "http://localhost:8000/images/";
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [singlePost, setSinglePost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setupdateMode] = useState(false);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setSinglePost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${singlePost._id}`, {
        data: { username: user.username },
      });
      navigate("/");
    } catch (error) {
      console.error("An error occurred while deleting the post:", error);
      // You can display an error message to the user here
    }
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${singlePost._id}`, {
        username: user.username,
        title,
        desc,
      });
    setupdateMode(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        {singlePost.photo && (
          <img className="single-post-img" src={PF + singlePost.photo} alt="" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="single-post-title-input"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        ) : (
          <h1 className="single-post-title">
            {singlePost.title}
            {singlePost.username === user?.username && (
              <div className="single-post-edit">
                <AiFillEdit
                  className="single-post-icon"
                  onClick={() => setupdateMode(true)}
                />
                <AiOutlineDelete
                  className="single-post-icon"
                  onClick={handleDelete}
                />
              </div>
            )}
          </h1>
        )}

        <div className="single-post-info">
          <span className="single-post-author">
          作者：{" "}
            <Link to={`/?user=${singlePost.username}`} className="link">
              <b>{singlePost.username}</b>
            </Link>
          </span>
          <span className="single-post-date">
            {new Date(singlePost.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="desc-input"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="single-post-desc">{singlePost.desc}</p>
        )}
        {updateMode && (
          <button className="single-post-button" onClick={handleUpdate}>
           更新
           
          </button>
        )}
      </div>
    </div>
  );
};
