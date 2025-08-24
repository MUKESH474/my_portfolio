import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaAddressCard, FaPhoneAlt, FaEnvelope, FaFileDownload } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <Container>
        {/* Contact Title */}
        <Row>
          <Col md={12} className="mb-3">
            <h4 className="fw-bold">Contact</h4>
          </Col>
        </Row>

        {/* Contact Details */}
        <Row className="mb-4">
          <Col md={4} className="mb-3">
            <strong>
              <FaAddressCard className="me-2 text-success" />
              Address
            </strong>
            <p className="mb-0">
              No 20 Indira Nagar, <br />
              Alambadi Road, <br />
              Perambalur-621212.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <strong>
              <FaPhoneAlt className="me-2 text-primary" />
              Phone
            </strong>
            <p className="mb-0">7904163708</p>
          </Col>

          <Col md={4} className="mb-3">
            <strong>
              <FaEnvelope className="me-2 text-danger" />
              Email
            </strong>
            <p className="mb-0">mmugesh0402@gmail.com</p>
          </Col>
        </Row>

        {/* Resume Button */}
        
      </Container>
    </footer>
  );
};

export default Footer;
