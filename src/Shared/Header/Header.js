import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "./header.css"

const Header = () => {
      const logout = () => {
            localStorage.removeItem('email')
            signOut();
      }
      return (
            <Navbar expand="md" fixed='top' className='navbar shadow'>
                  <Container>
                        <Link to="/" className='text-dark h3 text-decoration-none'>Luxurious Car</Link>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="ms-auto">
                                    <NavLink to="/" className='text-decoration-none text-dark px-3 py-2 ms-2'>Home</NavLink>
                                    <NavLink to="/my-items" className='text-decoration-none text-dark px-3 py-2 ms-2'>My Items</NavLink>
                                    <NavLink to="/blogs" className='text-decoration-none text-dark px-3 py-2 ms-2'>Blogs</NavLink>
                                    {
                                          localStorage.getItem("email") ? <NavLink to="/login" onClick={logout} className='text-decoration-none text-dark px-3 py-2 ms-2'>LogOut</NavLink> : <NavLink to="/login" className='text-decoration-none text-dark px-3 py-2 ms-2'>Login</NavLink>
                                    }
                              </Nav>
                        </Navbar.Collapse>
                  </Container>
            </Navbar>
      );
};

export default Header;