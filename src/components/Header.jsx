import React, { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">PIYUSH</span>
      </div>
      <nav className={`nav ${isNavOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
