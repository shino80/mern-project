import React from "react";
import "./post.css";
import { Link } from "react-router-dom";
export const Post = ({ post }) => {
  const PF = 'https://goraku-blog.onrender.com/images/'
  return (
    <div className="post">
      {post.photo ? (
        <img className="post-img" src={ PF + post.photo} alt="" />
      ) : (
        <img
          className="post-img"
          src="https://plus.unsplash.com/premium_photo-1690487578018-c2bffcc1aca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      )}

      <div className="post-info">
        <div className="post-cats">
          {post.categories.map((cat) => (
            <span className="post-cat">{cat.name}</span>
          ))}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          {" "}
          <span className="post-title">{post.title}</span>
        </Link>

        <hr />
        <span className="post-date">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="post-desc">{post.desc}</p>
    </div>
  );
};
