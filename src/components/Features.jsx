import React from 'react';
import '../index.css';

const features = [
  { title: "Smart Scheduling", desc: "AI organizes your calendar automatically." },
  { title: "Task Automation", desc: "Let Tasker.AI handle your repetitive work." },
  { title: "Natural Language Input", desc: "Talk to your assistant like a human." },
  { title: "Progress Tracking", desc: "Visual timelines of your productivity." },
  { title: "Multi-device Sync", desc: "Access tasks from phone, tablet or PC." },
  { title: "Daily Briefings", desc: "Get a smart summary every morning." }
];

const Features = () => (
  <section className="features-section" id="features">
    <h2>Core Features</h2>
    <div className="features-grid">
      {features.map((f, i) => (
        <div className="card feature-card" key={i}>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;