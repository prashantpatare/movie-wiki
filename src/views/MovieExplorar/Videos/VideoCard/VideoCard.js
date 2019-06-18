import React from "react";
import ImageResource from "../../../../components/ImageResource/ImageResource";
import "./VideoCard.css";

function VideoCard(props) {
  const video = props.videoinfo;
  return (
    <div className="video-card">
      <div className="video-card-frame">
        <iframe
          src={"https://www.youtube.com/embed/" + video.key}
          frameborder="0"
          height="200px"
          width="400px"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        />
      </div>
      <div className="video-card-description">
        <h4>
          <a
            href={"https://youtu.be/" + video.key}
            target="_blank"
            rel="noopener noreferrer"
          >
            {video.name}
          </a>
        </h4>
        <h5>{video.type}</h5>
      </div>
    </div>
  );
}

export default VideoCard;
