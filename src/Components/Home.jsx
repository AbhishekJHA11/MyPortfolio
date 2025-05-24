import React from "react";

const Home = () => {
  return (
    <section id="home" style={{ padding: "2rem", fontFamily: "Arial" }}>
      {/* Hero Section */}
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm <strong>Abhishek Jha</strong>, a passionate Web Developer
        focused on building fast, responsive, and user-friendly web
        applications.
      </p>

      {/* About Me Section */}
      <section id="about" style={{ marginTop: "2rem" }}>
        <h2>About Me</h2>
        <p>
          I'm a self-motivated web developer with hands-on experience in
          React.js, JavaScript, HTML, and CSS. I love turning ideas into reality
          and continuously strive to improve my skills through projects and
          learning.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ marginTop: "2rem" }}>
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>Git & GitHub</li>
          <li>Responsive Web Design</li>
        </ul>
      </section>

      {/* Projects Preview */}
      <section id="projects" style={{ marginTop: "2rem" }}>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Pomodoro Timer App</strong> – A productivity timer built
            with React.
          </li>
          <li>
            <strong>Portfolio Website</strong> – This very site showcasing my
            work.
          </li>
          <li>
            <strong>To-Do List</strong> – A simple and efficient task manager.
          </li>
        </ul>
      </section>

      {/* Contact Call-To-Action */}
      <section id="contact" style={{ marginTop: "2rem" }}>
        <h2>Get In Touch</h2>
        <p>
          Have a project idea or just want to connect? Feel free to reach out
          via email or LinkedIn.
        </p>
        <button style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}>
          Contact Me
        </button>
      </section>
    </section>
  );
};

export default Home;
