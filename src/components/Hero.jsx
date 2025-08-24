import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import './Hero.css'

const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex align-items-center text-center"
      style={{ minHeight: "100vh", paddingTop: "72px" }}
    >
      <Container>
        {/* Intro */}
        <h1>
          Hi, I’m <span className="text-primary">Mukesh Kumar</span>
        </h1>
        <p className="lead">
          <strong>FullStack Java Developer</strong> 
        </p>

        {/* Buttons */}
        <div className="mb-4">
          <a href="#projects" className="btn btn-primary me-3">
            View My Work
          </a>
         
        </div>

        {/* Social Links */}
        <div className="d-flex justify-content-center gap-4 mb-4">
          <a
            href="https://github.com/MUKESH474"
            target="_blank"
            rel="noreferrer"
            className="text-white fs-4"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mukesh-kumar-m74/"
            target="_blank"
            rel="noreferrer"
            className="text-primary fs-4"
          >
            <FaLinkedin />
          </a>
         
        </div>

        {/* Skills Section */}
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {[
              "Java",
              "Spring Boot",
              "JavaScript",
              "React.js",
            "Bootstrap",
            "SQL",
            "Git & GitHub",
          ].map((skill, idx) => (
            <span key={idx} className="badge-gradient">
              {skill}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
