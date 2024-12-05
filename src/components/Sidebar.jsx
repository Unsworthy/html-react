import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="active">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </li>
        <li>
          <i className="fas fa-video"></i>
          <span>Shorts</span>
        </li>
        <li>
          <i className="fas fa-bell"></i>
          <span>Subscriptions</span>
        </li>
        <hr />
        <li>
          <i className="fas fa-folder"></i>
          <span>Library</span>
        </li>
        <li>
          <i className="fas fa-history"></i>
          <span>History</span>
        </li>
        <li>
          <i className="fas fa-play-circle"></i>
          <span>Your Videos</span>
        </li>
        <li>
          <i className="fas fa-clock"></i>
          <span>Watch Later</span>
        </li>
        <li>
          <i className="fas fa-thumbs-up"></i>
          <span>Liked Videos</span>
        </li>
      </ul>

      <h3 className="subscriptions-title">Subscriptions</h3>
      <ul className="sidebar-menu">
        <li>
          <i className="fas fa-crown"></i>
          <span>MPL Indonesia</span>
        </li>
        <li>
          <i className="fas fa-user"></i>
          <span>Jonathan Liandi</span>
        </li>
        <li>
          <i className="fas fa-users"></i>
          <span>The Joomers</span>
        </li>
        <li>
          <i className="fas fa-heart"></i>
          <span>Oura</span>
        </li>
        <li>
          <i className="fas fa-star"></i>
          <span>Nastasia Adeline</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
