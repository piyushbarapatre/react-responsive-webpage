import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero-section" id="hero">
        <div className="hero-content">
          <span className="intro">👋 My name is Piyush</span>
          <h1>I'm a Developer</h1>
          <p>Based in Nagpur, India.</p>
          <button className="cta-button">Let's Start</button>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src="home.png" alt="Home.png" />
          </div>
        </div>
      </section>
      <section className="border">
        <div className="border-logo">
          R<span className="circle">O</span>ny
        </div>
        <div className="border-logo">SkinY</div>
        <div className="border-logo">
          <i className="icon-shop">Shopy</i>
        </div>
        <div className="border-logo">@PROMPT</div>
        <div className="border-logo">
          <span className="icon-learn">Learn</span>
        </div>
      </section>
    </>
  );
};

export default Hero;
