import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SmoothSlider from './components/SmoothSlider';
import Features from './components/Features';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SmoothSlider />
      <Features />
      <Footer />
    </>
  );
}

export default App;