import React from "react";
import "./intro.scss";
export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="container">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/me2.jpg" alt="" />
          
          </div>
        </div>
        <div className="right">
          <h2>Hi, I'm</h2>
          <h1>Joe Pointon</h1>
          <h2>Web and mobile developer.</h2>
        </div>
      </div>
    </div>
  );
}
