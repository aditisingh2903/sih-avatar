import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="new-nav">
      <div className="nav-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <span className="nav-title">KarChinha AI</span>
      </div>

      <div className="nav-links">
        <Link to="/sign-kit/home" className="nav-item">Home</Link>
        <Link to="/sign-kit/convert" className="nav-item">Convert</Link>
        <Link to="/sign-kit/learn-sign" className="nav-item">Learn Sign</Link>
        <Link to="/sign-kit/feedback" className="nav-item">Feedback</Link>
      </div>
    </nav>
  );
}

export default Navbar;
