import React, { useEffect, useState } from "react";
import "./single-post.css";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const SinglePost = () => {
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
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        {singlePost.photo && 
          <img className="single-post-img" src={singlePost.photo} alt="" />
        }
        <img
          className="https://images.unsplash.com/photo-1682685797332-e678a04f8a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          src={singlePost.photo}
          alt=""
        />
        <h1 className="single-post-title">
          {singlePost.title}
          <div className="single-post-edit">
            <AiFillEdit className="single-post-icon" />
            <AiOutlineDelete className="single-post-icon" />
          </div>
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">
            Author: <b>{singlePost.username}</b>
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
