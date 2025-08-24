    import React from "react";
    import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";
    import './Navber.css'
    const Navbar = () => {
    return (
        <BsNavbar expand="lg" className="bg-body-tertiary">
        <Container>
            <BsNavbar.Brand href="#home">My Portfolio</BsNavbar.Brand>
            <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BsNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#hero">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link> {/* ✅ updated */}
            </Nav>

            </BsNavbar.Collapse>
        </Container>
        </BsNavbar>
    );
    };

    export default Navbar;
