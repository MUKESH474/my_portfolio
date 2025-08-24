import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          

          {/* Right Side: Content */}
          <Col md={12}>
            <h2 className="section-title">About Me</h2>
            <p>
              Hello! I’m <strong>Mukesh Kumar</strong>, a passionate{" "}
              <span className="text-primary">Java FullStack Developer</span> Skilled in React.js, Java, Spring Boot, and MySQL. Built several
                  self-driven projects and eager to learn and grow in a software development team.
            </p>

            {/* Highlights / Timeline */}
            <ul className="list-unstyled mb-4">
              <li>🎓 B.E. Computer Science and Engineering (7.79 CGPA)</li>
              <li>📚 Full Stack Java Development – Besant Technology, Chennai</li>
              <li>🚀 Skills: React.js, SpringBoot,  Java, JavaScript, SQL, Bootstrap</li>
              <li>🌱 Currently learning: Spring Boot + Full Stack Development</li>
              <li>🌟 Passionate about building scalable, responsive, and modern web apps</li>
            </ul>

            {/* Skills Progress Bars */}
            <h5 className="fw-bold mb-3">Core Skills</h5>
            <div className="mb-3">
              <label>Spring Boot </label>
              <ProgressBar now={75} label={`75%`} variant="primary" />
            </div>
            <div className="mb-3">
              <label>React.js</label>
              <ProgressBar now={85} label={`85%`} variant="info" />
            </div>
            <div className="mb-3">
              <label>Java </label>
              <ProgressBar now={78} label={`75%`} variant="danger" />
            </div>
            <div className="mb-3">
              <label>JavaScript (ES6)</label>
              <ProgressBar now={80} label={`80%`} variant="warning" />
            </div>
            <div className="mb-3">
              <label>Bootstrap</label>
              <ProgressBar now={90} label={`90%`} variant="success" />
            </div>

           
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
