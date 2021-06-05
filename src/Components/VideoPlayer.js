import React from "react";
import '../Styles/VideoPlayer.css';

const VideoPlayer = ({ videoID }) => {
  if (videoID === "") {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        Search for a video
      </p>
    );
  }
  return (
    <div className="video-player">
      <iframe
        title={videoID}
        className="video-iframe"
        src={`https://www.youtube.com/embed/${videoID}`}
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
