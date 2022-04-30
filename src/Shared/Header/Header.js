import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
      return (
            <Navbar bg="light" expand="md">
                  <Container>
                        <Nav.Link to="/">Luxurious Car</Nav.Link>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="ms-auto">
                                    <NavLink to="/" className='text-decoration-none text-dark px-3 py-2'>Home</NavLink>
                                    <NavLink to="/my-items" className='text-decoration-none text-dark px-3 py-2'>My Items</NavLink>
                                    <NavLink to="/" className='text-decoration-none text-dark px-3 py-2'>Home</NavLink>
                                    <NavLink to="/" className='text-decoration-none text-dark px-3 py-2'>Home</NavLink>
                              </Nav>
                        </Navbar.Collapse>
                  </Container>
            </Navbar>
      );
};

export default Header;