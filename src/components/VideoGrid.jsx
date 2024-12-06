import React from "react";
import "./VideoGrid.css";

const videos = [
  {
    title: "Grand Final MPL ID | RRQ VS ONIC",
    channel: "MPL Indonesia",
    views: "689K views",
    time: "12 minutes ago",
    thumbnail: "/mpl.jpg", // Ganti sesuai nama file Anda
  },
  {
    title: "Ketika Si Kuda Disekolahin Sang Raja!!",
    channel: "Jonathan Liandi",
    views: "729K views",
    time: "2 days ago",
    thumbnail: "/joo.jpg",
  },
  {
    title: "COMEBACK RENTAL PS BARENG IPUN",
    channel: "Luthfi Halimawan",
    views: "144K views",
    time: "6 months ago",
    thumbnail: "/upi.jpg",
  },
  {
    title: "VLOG DEANKT DAN B2E DI SURABAYA",
    channel: "DEANKT",
    views: "184K views",
    time: "1 month ago",
    thumbnail: "/dean.jpg",
  },
];

function VideoGrid() {
  return (
    <div className="video-row">
      {videos.map((video, index) => (
        <div className="video-card" key={index}>
          <img src={video.thumbnail} alt={video.title} className="thumbnail" />
          <h4 className="video-title">{video.title}</h4>
          <p className="channel-name">{video.channel}</p>
          <p className="video-info">
            {video.views} • {video.time}
          </p>
        </div>
      ))}
    </div>
  );
}

export default VideoGrid;
