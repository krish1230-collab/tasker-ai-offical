import React, { useEffect, useRef } from "react";
import "./SmoothSlider.css";

const SmoothSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    let offset = 0;
    const slider = sliderRef.current;

    const animate = () => {
      if (slider) {
        offset -= 1;
        slider.style.transform = `translateX(${offset}px)`;
        if (Math.abs(offset) >= slider.scrollWidth / 2) offset = 0;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-track" ref={sliderRef}>
        <div className="slider-content">
          <span>⚡ Automate</span>
          <span>💬 Chat with AI</span>
          <span>📈 Boost Productivity</span>
          <span>⏰ Save Time</span>
          <span>📱 Seamless Sync</span>
          <span>🚀 Smarter Workflow</span>
        </div>
        <div className="slider-content">
          <span>⚡ Automate</span>
          <span>💬 Chat with AI</span>
          <span>📈 Boost Productivity</span>
          <span>⏰ Save Time</span>
          <span>📱 Seamless Sync</span>
          <span>🚀 Smarter Workflow</span>
        </div>
      </div>
    </div>
  );
};

export default SmoothSlider;
