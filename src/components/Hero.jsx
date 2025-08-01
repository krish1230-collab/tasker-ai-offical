import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <h2>Your AI Assistant for <span>Productivity</span></h2>
      <p>Tasker.Ai helps you automate your work, organize your schedule, and increase productivity with intelligent tools.</p>
      <button onClick={() => navigate("/chat")}>Get Started</button>
    </section>
  );
};

export default Hero;
