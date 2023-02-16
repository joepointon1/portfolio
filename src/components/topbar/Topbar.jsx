import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import {Link} from "react-router-dom"

export default function Topbar({menuOpen, setMenuOpen}) {
    function handleOpenMenu(){
        setMenuOpen(prev=>!prev)
    }
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <Link to="/" className="logo">Joe Pointon.</Link>
          
          <div className="itemContainer">
            <Person className="icon" />
            <span>+44 7400500102</span>
            <Mail className="icon" />
            <span>joepointon2@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={handleOpenMenu}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
