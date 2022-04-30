import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./header.css"

const Header = () => {
      return (
            <Navbar expand="md" fixed='top' className='navbar shadow'>
                  <Container>
                        <Nav.Link className='text-dark h3 text-decoration-none' to="/">Luxurious Car</Nav.Link>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="ms-auto">
                                    <NavLink to="/" className='text-decoration-none text-dark px-3 py-2 ms-2'>Home</NavLink>
                                    <NavLink to="/my-items" className='text-decoration-none text-dark px-3 py-2 ms-2'>My Items</NavLink>
                                    <NavLink to="/" className='text-decoration-none text-dark px-3 py-2 ms-2'>Home</NavLink>
                                    <NavLink to="/" className='text-decoration-none text-dark px-3 py-2 ms-2'>Home</NavLink>
                              </Nav>
                        </Navbar.Collapse>
                  </Container>
            </Navbar>
      );
};

export default Header;