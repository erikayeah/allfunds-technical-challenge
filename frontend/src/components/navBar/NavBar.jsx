import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/allfundslogo.webp";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className={style.container}>
        <Container>
          <Navbar.Brand>
            <a href="https://allfunds.com/es/blog/" target="_blank">
              <img src={logo} className={style.logo} />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                News
              </Nav.Link>
              <Nav.Link as={Link} to="/archived">
                Archived News
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
