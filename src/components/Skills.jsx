import React from "react";

const Skills = () => {
  return (
    <>
      <div className="container" id="skills">
        <div className="textContainer">
          <h2 className="heading">My Skills</h2>
          <div className="skillsContainer">
            <div className="skillBox" style={{ backgroundColor: "#A4D6C1" }}>
              <span className="icon">🌐</span>
              <span className="text">HTML</span>
            </div>
            <div className="skillBox" style={{ backgroundColor: "#FAD97A" }}>
              <span className="icon">🎨</span>
              <span className="text">HTML</span>
            </div>
            <div className="skillBox" style={{ backgroundColor: "#F6CAC9" }}>
              <span className="icon">🤖</span>
              <span className="text">HTML</span>
            </div>
            <div className="skillBox" style={{ backgroundColor: "lightblue" }}>
              <span className="icon">🪛</span>
              <span className="text">HTML</span>
            </div>
            <div className="skillBox" style={{ backgroundColor: "lightgreen" }}>
              <span className="icon">🧑‍💻</span>
              <span className="text">HTML</span>
            </div>
            <div className="skillBox" style={{ backgroundColor: "lavender" }}>
              <span className="icon">🈺</span>
              <span className="text">HTML</span>
            </div>
          </div>
        </div>
        <div className="imageContainer">
          <img src="skills.png" alt="SKills image" className="image" />
        </div>
      </div>
      <div className="contact-container">
        <h2 className="contact-heading">Interested working with me?</h2>
        <button className="cta-button">Contact Now</button>
      </div>
    </>
  );
};

export default Skills;
