import React from "react";
import PropTypes from "prop-types";

import "./RadialProgressBar.css";

function RadialProgressBar(props) {
  var barScaleSize = 0.8;
  if (props.size === "small") barScaleSize = 0.5;

  const percent = props.value;
  const degValue = Math.floor((180 * percent) / 100) + "deg";

  return (
    <div className="scaled" style={{ "--bar-scale-size": barScaleSize }}>
      <div className="circle-wrap" style={{ "--progress-angle": degValue }}>
        <div className="circle">
          <div className="mask full">
            <div className="fill" />
          </div>
          <div className="mask half">
            <div className="fill" />
          </div>
          <div className="inside-circle">{percent}%</div>{" "}
          <div className="background-circle" />
        </div>
      </div>
    </div>
  );
}

RadialProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.string
};

export default RadialProgressBar;
