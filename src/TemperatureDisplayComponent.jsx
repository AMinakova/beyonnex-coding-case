import React from "react";

export function TemperatureDisplayComponent({ current, max, min }) {
  const position = (current - min) / (max - min);
  document.documentElement.style.setProperty("--arrowPosition", position);

  return (
    <div className="container">
      <div className="display">
        <div className="minLine"></div>
        <div className="maxLine"></div>
        <div className="overlay"></div>
        <div className="arrow"></div>
      </div>
      <div className="degreesLabel">{current}&deg;C</div>
    </div>
  );
}
