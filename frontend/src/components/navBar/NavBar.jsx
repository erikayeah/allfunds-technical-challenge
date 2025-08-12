import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/allfundslogo.webp";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className={style.container}>
        <Link to="/news">
          <img src={logo} className={style.logo} />
        </Link>

        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-dark active ms-3"
                    : "btn btn-outline-dark ms-3"
                }
              >
                News
              </NavLink>

              <NavLink
                to="/archived"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-dark active ms-3"
                    : "btn btn-outline-dark ms-3"
                }
              >
                Archived News
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
