import React, { useEffect } from "react";
import '../App.css';
import './About.css';



function About() {
  return (
    <div className='hero-container'>
      <video src='/config/videos/video-1.mp4' autoPlay loop muted />
      <h1>Very Lazy Faces</h1>
      <p>The future of NFTs</p>
      <p>Mint yours below!</p>
    </div>
  );
}

export default About;
