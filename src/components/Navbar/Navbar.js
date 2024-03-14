import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from "../../PokemonLogo.png";
// import Search from '../card/search';

const NavbarMenu = () => {
  return (
    <div className="Menu">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#/">
            <img src={logo} width="150" height="50" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/pokemon">
                Pokemon
              </Nav.Link>
              <Nav.Link as={NavLink} to="/type/1">
                Tipo
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* <Search/> */}
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
