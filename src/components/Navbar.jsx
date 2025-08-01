import React from 'react';
import '../index.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Tasker.Ai</div>
    <ul className="nav-links">
      <li><a href="#features">Features</a></li>
      <li><a href="#docs">Docs</a></li>
      <li><a href="#login">Login</a></li>
    </ul>
  </nav>
);

export default Navbar;
