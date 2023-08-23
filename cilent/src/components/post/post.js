import React from "react";
import "./post.css";
export const Post = () => {
  return (
    <div className="post">
      <img
        className="post-img"
        src="https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
      <div className="post-info">
        <div className="post-cats">
          <span className="post-cat">Music</span>
          <span className="post-cat">Life</span>
        </div>
        <span className="post-title">The error message you're seeing.</span>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>
      <p className="post-desc">
        The error message you're seeing, 'FontAwesomeIcon' is not defined, is a
        common error in React applications that use JSX. This error occurs when
        you're trying to use a component, in this case, FontAwesomeIcon, without
        properly importing or defining it.
      </p>
    </div>
  );
};
