import React from "react";
import "./home.css";
import { Header } from "../../header/header";
import { Posts } from "../../posts/posts";
import { SideBar } from "../../sidebar/sidebar";
export const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
};
