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
            <Navbar bg="light" expand="lg" className="navbar">
            <Container>
              <Navbar.Brand href="#home" className="font-weight-bold mr-3">QTemu</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home" className="mx-3">Create Meetup</Nav.Link>
                  <Nav.Link href="#link" className="mx-3">Explore</Nav.Link>
                  <Nav.Link href="#link" className="mx-3 btn ml-auto">Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        )
    }
}

export default Header;