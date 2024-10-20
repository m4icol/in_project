import React from "react";
import { CSSProperties } from "react";

const GradientCircle = () => {
  const gradientStyle: CSSProperties = {
    zIndex: -1,
    position: "absolute",
    width: "1500px",
    height: "1500px",
    bottom: "20%",
    left: "10%",
    background: `radial-gradient(circle, rgba(0,0,255,0.1) 0%, rgba(0,0,0,0) 70%)`,
  };

  return <div style={gradientStyle} />;
};

export default GradientCircle;
