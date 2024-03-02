import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
    const common = {
        marginRight:15,
        fontSize:17,
        letterSpacing:".5px"
    }
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <div>
            <h2 className="mt-2 h2_right" style={{ color: "#6c63ff" }}>
              <Nav.Link href="#home">LKProject</Nav.Link>
            </h2>
          </div>
          <Nav className="">
            <div className="mt-2">
              <Link to='/' className="text-decoration-none" style={common}>Home</Link>
              <Link to='/about' className="text-decoration-none" style={common}>About</Link>
              <Link to='/playlist' className="text-decoration-none" style={common}>PlayList</Link>
              <Link to='/contact' className="text-decoration-none" style={common}>Contact</Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
