    import React from 'react'
    import { Link } from "react-router-dom";
    import { Navbar, Nav, Container } from "react-bootstrap";
    
    const Header = () => {
      return (
        <>
        <Navbar expand="lg" style={{ backgroundColor: "#1D3868" }}>
        <Container>
          <Navbar.Brand>
            <Nav.Link as={Link} to={"/"}>
              {/* <img src="/logo.png" alt="logo" width="142px" /> */}
            </Nav.Link>
          </Navbar.Brand>
          <Nav className="ms-auto " style={{ height: "50px", display:"flex", justifyContent: "center", alignItems: "center" }}>
              <Nav.Link
                as={Link}
                className="d-flex align-items-center"
                to={`/`}
                style={{ color: "white", marginRight: "20px", fontSize: "20px" }}
              >
                Home 
              </Nav.Link>
            {/* </Nav>
            <Nav className="ms-auto"> */}
              <Nav.Link
                as={Link}
                className="d-flex align-items-center"
                to={`/about`}
                style={{ color: "white", marginRight: "20px", fontSize: "20px" }}
              >
                About Me 
              </Nav.Link>
            {/* </Nav>
            <Nav className="ms-auto"> */}
              <Nav.Link
                as={Link}
                className="d-flex align-items-center"
                to={`/resume`}
                style={{ color: "white", marginRight: "20px", fontSize: "20px" }}
              >
                Resume 
              </Nav.Link>
            {/* </Nav>
            <Nav className="ms-auto"> */}
              <Nav.Link
                as={Link}
                className="d-flex align-items-center"
                to={`/contactme`}
                style={{ color: "white", marginRight: "20px", fontSize: "20px" }}
              >
                Contact Me 
              </Nav.Link>
            {/* </Nav>
            <Nav className="ms-auto"> */}
              <Nav.Link
                as={Link}
                className="d-flex align-items-center"
                to={`/portfolio`}
                style={{ color: "white", marginRight: "20px", fontSize: "20px" }}
              >
                Portfolio 
              </Nav.Link>
            {/* </Nav>
            <Nav className="ms-auto"> */}
              <Nav.Link
                as={Link}
                className="d-flex align-items-center"
                to={`/project`}
                style={{ color: "white", marginRight: "20px", fontSize: "20px" }}
              >
                Project 
              </Nav.Link>
            </Nav>
            
        </Container>
      </Navbar>
      </>

      )
    }
    
    export default Header