import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>
        Feel free to connect with me. I'm always open to discussing new
        projects, creative ideas, or opportunities to be part of your visions.
      </p>
      <div className="contact-info">
        <div className="contact-card">
          <h3>Email</h3>
          <p>abhishekaj112002@gmail.com</p>
        </div>
        <div className="contact-card">
          <h3>GitHub</h3>
          <a
            href="http://github.com/AbhishekJHA11"
            target="_blank"
            rel="noopener noreferrer"
          >
            AbhishekJHA11
          </a>
        </div>
        <div className="contact-card">
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/abhishek-jha-46a780230/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abhishek Jha
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
