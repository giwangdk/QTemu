import React, {Component} from 'react';
import {
    Navbar, 
    Container,
    Nav
} from 'react-bootstrap';

class Header extends Component{

    render(){
        return(
            <div>
            <Navbar bg="light" expand="lg" className="navbar p-3 text-white-50">
            <Container>
              <Navbar.Brand href="#home" className="font-weight-bold mr-5 nav-brand">QTemu</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto text-white nav d-flex justify-content-between align-items-center">
                  <Nav.Link href="#home" className="mx-4">Create Meetup</Nav.Link>
                  <Nav.Link href="#link" className="mx-4 nav-link">Explore</Nav.Link>
                  <Nav.Link href="#link" className="btn nav-link ml-auto ">Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        )
    }
}

export default Header;