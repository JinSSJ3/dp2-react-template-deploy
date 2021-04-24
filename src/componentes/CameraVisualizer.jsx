import React, { Component } from "react";
import "./CameraVisualizer.css";
const CameraVisualizer = (props) => {
  const { visible } = props;
  if (visible) {
    return (
      <div>
        <video
          id="localVideo"
          autoplay="autoplay"
          
          controls="controls"
          tabindex="0"
        />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default CameraVisualizer;
