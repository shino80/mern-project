import React from "react";
import "./posts.css";
import { Post } from "../post/post";
export const Posts = () => {
  return (
    <div className="posts">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};
