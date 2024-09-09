import React from "react";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <p>Our friendly team would love to hear from you.</p>
          <form>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input type="email" placeholder="Name" />
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea type="text" placeholder="Message" />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-info">
          <img src="contact.png" />
          <ul>
            <li>
              <i className="fas fa-phone-alt"></i>
              <p>+01 234 567 89</p>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <p>info@gmail.com</p>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
