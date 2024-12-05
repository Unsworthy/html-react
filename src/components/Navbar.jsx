import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <input type="text" className="search-bar" placeholder="Search" />
      <div className="icons">
        <span className="profile-icon">👤</span>
      </div>
    </div>
  );
}

export default Navbar;
