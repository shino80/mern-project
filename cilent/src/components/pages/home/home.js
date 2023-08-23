import React, { useEffect, useState } from "react";
import "./home.css";
import { Header } from "../../header/header";
import { Posts } from "../../posts/posts";
import { SideBar } from "../../sidebar/sidebar";
import axios from 'axios';
export const Home = () => {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
const fetchPosts = async ()=>{
  const res = await axios.get('/posts')
  console.log(res.data)
 setPosts(res.data)
}
fetchPosts()
  },[])
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
};
