import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="#" aria-label="Facebook">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="#" aria-label="Pinterest">
          <i class="fa-brands fa-pinterest-p"></i>
        </a>
      </div>
      <div className="copyright">
        ©️ 2023 copyright all rights reserved by pxdraft
      </div>
    </footer>
  );
};

export default Footer;
