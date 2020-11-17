import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// import Avatar from '../assets/Avatar.JPG';

function NavTop() {
  return (
    <div>
      <Navbar className="navBar" collapseOnSelect expand="lg" >
        <Navbar.Brand href="#home">
        </Navbar.Brand>
        {/* <Nav className="mr-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav> */}
        <Navbar className="navBar" collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand id="name"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" >
              <Nav.Link href="/SearchPage">Home</Nav.Link>
              <Nav.Link href="/Saved">Saved Books</Nav.Link>
            </Nav>
            {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
      </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Navbar>
        {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
      </Navbar>
    </div>

  )
}

export default NavTop;
