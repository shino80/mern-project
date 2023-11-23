import React from "react";
import "./about.css";
const About = () => {
  return (
   
      <div className="about-container">
        <img
          src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
          alt="img-about"
          className="img-about"
        />

        <div className="about-text">
          <h1 className="h1-text">ブログの目的</h1>
          <p>
            {" "}
            私たちは旅行がもたらす変革の力を信じています。
            それぞれの旅は、地球の多様なタペストリーを探索し、学び、つながる機会です。
            私たちの旅行ブログは単なる物語のコレクションではありません。
            それは没入型の体験、隠された宝石、そして日常の中に非日常を発見する喜びへのパスポートです。
          </p>
        </div>
      </div>
    
  );
};

export default About;
