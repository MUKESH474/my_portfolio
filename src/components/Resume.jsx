import React from "react";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import "./Resume.css";


const Resume = () => {
  return (
    <section id="resume" className="py-5 bg-white">
      <Container>
        <h2 className="section-title">Resume</h2>

        

        <Row>
          {/* Education */}
         <Col md={12} className="mb-4">
  <h4 className="fw-bold">Education</h4>
  <Row>
    {/* First Column */}
    <Col md={6}>
      <ul className="list-unstyled">
        <li className="mb-3">
          <strong>B.E. Computer Science & Engineering</strong>
          <br />
          BIT Campus, CGPA: 7.79 (2020–2024)
        </li>
      </ul>
    </Col>

    {/* Second Column */}
    <Col md={6}>
      <ul className="list-unstyled">
        <li className="mb-3">
          <strong>Full Stack Java Development Course</strong>
          <br />
          Besant Technology, Chennai
        </li>
      </ul>
    </Col>
  </Row>
</Col>

          

        {/* Download Resume */}
        <div className="text-center mb-4">
          <Button
            variant="primary"
            href="./resume.pdf"
            download
            className="d-flex align-items-center justify-content-center mx-auto gap-2 w-50"
          >
            <FaDownload /> Download My Resume
          </Button>
        </div>
          {/* Experience / Certifications */}
          
        </Row>

        {/* Skills Progress Bars */}
        
         
      </Container>
    </section>
  );
};

export default Resume;
