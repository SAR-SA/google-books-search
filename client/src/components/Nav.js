import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavTop() {
  return (
    <div>
     <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Google Books Search</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/searchpage">Home</Nav.Link>
      <Nav.Link href="/saved">Saved Books</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> 
    </div>

  )
}

export default NavTop;


