import React from "react";
import "./ImageResource.css";

function ImageResource(props) {
  /* default settings */
  var imgQuality = "w300";
  var className = "";
  var width = "200px";

  if (props.type === "poster") width = "200px";
  else if (props.type === "poster-large") width = "300px";
  else if (props.type === "backdrop") {width = "500px";imgQuality = "w780";}
  else if (props.type === "cast") width = "150px";
  else if (props.type === "backdrop-wallpaper") {width = "100%"; imgQuality = "w1280"; className = "img-backdrop-wallpaper"; }

  const imageUrl =
    process.env.REACT_APP_IMAGE_API_URL + imgQuality + "/" + props.path;

  return (
    <React.Fragment>
      <img src={imageUrl} alt="" width={width} className={className} />
    </React.Fragment>
  );
}

export default ImageResource;
