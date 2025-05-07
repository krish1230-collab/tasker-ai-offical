import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Tasker.Ai</div>
    <ul className="nav-links">
      <li><a href="#features">Features</a></li>
      <li><a href="#">Docs</a></li>
      <li><a href="#">Login</a></li>
    </ul>
  </nav>
);

export default Navbar;
