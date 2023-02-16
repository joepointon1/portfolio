import React from "react";
import { Link } from "react-router-dom";
import "./menu.scss";
export default function Menu({ menuOpen, setMenuOpen }) {
  function handleClick() {
    setMenuOpen(false);
  }
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={handleClick}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={handleClick}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={handleClick}>
          <a href="#works">Works</a>
        </li>
        <li onClick={handleClick}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

// return (
//   <div className={"menu " + (menuOpen && "active")}>
//     <ul>
//       <li onClick={()=>handleClick("intro")}>
//         Home
//       </li>
//       <li onClick={()=>handleClick("portfolio")}>
//         Portfolio
//       </li>
//       <li onClick={()=>handleClick("works")}>
//         Works
//       </li>
//       <li onClick={()=>handleClick("contact")}>
//         Contact
//       </li>
//     </ul>
//   </div>
// );
