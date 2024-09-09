import React from "react";

const About = () => {
  return (
    <div className="profile-container" id="about">
      <div className="profile-image">
        <img src="about.png" alt="About.png" />
      </div>
      <div className="profile-content">
        <h1 className="profile-title">
          This is my Reactjs sample work where I practice how to make Webpage
          Responsive
        </h1>
        <p className="profile-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ullam
          aliquid temporibus sunt officiis velit Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quibusdam voluptatibus harum culpa quis.
          Minima iusto laboriosam reiciendis illum ipsum odio amet, vero totam
          rerum, molestiae voluptate! Mollitia aperiam distinctio dicta.{" "}
        </p>
        <div className="profile-stats">
          <div className="stat-item">
            <h2 className="stat-number">285+</h2>
            <p className="stat-label">Project Completed</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">180+</h2>
            <p className="stat-label">Happy Clients</p>
          </div>
        </div>
        <div className="profile-buttons">
          <button className="contact-btn">Contact Me</button>
          <button className="profile-btn">Portfolio</button>
        </div>
      </div>
    </div>
  );
};

export default About;
