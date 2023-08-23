import React from "react";
import "./posts.css";
import { Post } from "../post/post";
export const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};
