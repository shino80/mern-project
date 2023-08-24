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
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setSinglePost(res.data);
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


  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        {singlePost.photo && (
          <img className="single-post-img" src={PF + singlePost.photo} alt="" />
        )}
        <img
          className="https://images.unsplash.com/photo-1682685797332-e678a04f8a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          src={singlePost.photo}
          alt=""
        />
        <h1 className="single-post-title">
          {singlePost.title}
          {singlePost.username === user?.username && (
            <div className="single-post-edit">
              <AiFillEdit className="single-post-icon" />
              <AiOutlineDelete
                className="single-post-icon"
                onClick={handleDelete}
              />
            </div>
          )}
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">
            Author:{" "}
            <Link to={`/?user=${singlePost.username}`} className="link">
              <b>{singlePost.username}</b>
            </Link>
          </span>
          <span className="single-post-date">
            {new Date(singlePost.createdAt).toDateString()}
          </span>
        </div>
        <p className="single-post-desc">{singlePost.desc}</p>
      </div>
    </div>
  );
};
