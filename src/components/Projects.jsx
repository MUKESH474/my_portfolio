import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Course Registration System",
      desc: "Developed a full-stack web application to manage course details, registration forms and registered student records. Created RESTful APIs using Spring Boot for CRUD operations and connected to MySQL for data persistence.",
      tech: ["Bootstrap", "JavaScript", "Java", "SpringBoot", "MySQL"],
      github: "https://github.com/MUKESH474/Course-Registration-System",
      demo: "https://yourportfolio.netlify.app",
    },
    {
      title: "E-Commerce Website (with API Integration)",
      desc: "Built a responsive e-commerce platform with product listing, filtering, and cart functionality. Integrated FakeStoreAPI using the Fetch method to display dynamic content. Managed application state using React Hooks.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "React js", "Fake APIs"],
      github: "https://github.com/MUKESH474/m-cart",
      demo: "https://yourecommerce.netlify.app",
    },
    {
      title: "SmartShop – E-Commerce Product Catalog",
  desc: "Developed a dynamic product catalog for an e-commerce platform with features like product listing, category-wise filtering, ratings, and stock management. Used JSON mock data to simulate real-time API responses for testing and UI integration.",
      tech: ["Java", "Spring Boot", "MySQL", "RESTful Web Services"],
      github: "https://github.com/MUKESH474/SmartShop",
      demo: "https://yourweather.netlify.app",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="section-title">Projects</h2>
        <Row>
          {projects.map((p, i) => (
            <Col md={6} lg={4} key={i} className="mb-4">
              <Card className="h-100 shadow-sm project-card">
                {/* Project Body */}
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text>{p.desc}</Card.Text>

                  {/* Tech Badges */}
                  <div className="mb-3">
                    {p.tech.map((t, idx) => (
                      <span key={idx} className="badge-gradient me-2 mb-2">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* GitHub + Demo Buttons */}
                  <div className="mt-auto d-flex justify-content-between">
                    <Button
                      variant="dark"
                      size="sm"
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="me-1" /> GitHub
                    </Button>
                    
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
