import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    { title: "Smart Scheduling", desc: "AI organizes your calendar automatically." },
    { title: "Task Automation", desc: "Let Tasker.AI handle your repetitive work." },
    { title: "Natural Language Input", desc: "Talk to your assistant like a human." },
    { title: "Progress Tracking", desc: "Visual timelines of your productivity." },
    { title: "Multi-device Sync", desc: "Access tasks from phone, tablet or PC." },
    { title: "Daily Briefings", desc: "Get a smart summary every morning." }
  ];

  return (
    <section className="features-grid" id="features">
      <h2>Core Features</h2>
      <div className="grid">
        {features.map((f, idx) => (
          <div className="feature-card" key={idx}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
