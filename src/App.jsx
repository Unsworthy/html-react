import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import VideoGrid from "./components/VideoGrid";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Navbar />
        <VideoGrid />
      </div>
    </div>
  );
}

export default App;
