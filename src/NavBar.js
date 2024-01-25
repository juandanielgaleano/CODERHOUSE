
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/">Instrumentos musicales</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">Sobre nosotro</Nav.Link>
          <Nav.Link href="/contact">Contactanos</Nav.Link>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;