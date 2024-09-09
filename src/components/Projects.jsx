import React from "react";

const Project = () => {
  return (
    <div className="latest-projects-container" id="projects">
      <h2 className="section-title">LATEST PROJECTS</h2>
      <div className="project-card">
        <div className="project-details">
          <div className="project-category">
            <span>WEB DESIGN</span>
          </div>
          <h3 className="project-title">
            Website Design for Marketing Agency Startup.
          </h3>
          <p className="project-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            esse praesentium, doloremque, vitae dignissimos earum ut sit optio
            ipsa velit nesciunt perferendis tempore, voluptatem doloribus
            distinctio cum temporibus quisquam quaerat
          </p>
          <button className="view-project-button">VIEW PROJECTS</button>
        </div>
        <div className="project-image">
          <img src="project-1.jpg" />
        </div>
      </div>
      <div className="project-card">
        <div className="project-image">
          <img src="project-1.jpg" />
        </div>
        <div className="project-details">
          <div className="project-category">
            <span>WEB DESIGN</span>
          </div>
          <h3 className="project-title">
            Website Design for Marketing Agency Startup.
          </h3>
          <p className="project-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            esse praesentium, doloremque, vitae dignissimos earum ut sit optio
            ipsa velit nesciunt perferendis tempore, voluptatem doloribus
            distinctio cum temporibus quisquam quaerat
          </p>
          <button className="view-project-button">VIEW PROJECTS</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
