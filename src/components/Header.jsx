import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>FLIPKART</Navbar.Brand>
        </LinkContainer>
        <Nav className="ml-auto" style={{ marginLeft: 'auto' }}>
          <LinkContainer to="/cart">
            <Nav.Link>
              <i className="fas fa-shopping-cart"></i>Cart
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
