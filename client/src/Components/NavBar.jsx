import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/donut shop logo transparent.png"
import "../Style/NavBar.css"

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="navbar-container">
      <Container>
        <Navbar.Brand href="#home" className="logo-name">
          <img src={logo} alt="Logo" className="logo-image" />
          Donutopia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Menu
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              About Us
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Review
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
