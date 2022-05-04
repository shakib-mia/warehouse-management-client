import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "./header.css"

const Header = () => {
      const logout = () => {
            localStorage.removeItem('name')
            localStorage.removeItem('email')
            signOut();
      }
      return (
            <Navbar expand="lg" fixed='top' className='navbar shadow'>
                  <Container>
                        <Link to="/" className='text-dark h3 text-decoration-none'>Luxurious Car</Link>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="ms-auto">
                                    <NavLink to="/" className='text-decoration-none text-dark px-3 py-2 ms-2'>Home</NavLink>
                                    <NavLink to="/blogs" className='text-decoration-none text-dark px-3 py-2 ms-2'>Blogs</NavLink>
                                    {
                                          localStorage.getItem("name")
                                                ?
                                                <NavLink to="/" onClick={logout} className='text-decoration-none text-dark px-3 py-2 ms-2'>{localStorage.name} <button>Logout</button></NavLink>
                                                :
                                                localStorage.getItem("email")
                                                      ?
                                                      <span className='pt-2 pt-md-0'>
                                                            <NavLink to="/add-items" className='text-decoration-none text-dark px-3 py-2 ms-2 d-block d-lg-inline-block'>Add Items</NavLink>
                                                            <NavLink to="/manage-items" className='text-decoration-none text-dark px-3 py-2 ms-2 d-block d-lg-inline-block'>Manage Items</NavLink>
                                                            <NavLink to="/my-items" className='text-decoration-none text-dark px-3 py-2 ms-2 d-block d-lg-inline-block'>My Items</NavLink>
                                                            <NavLink to="/" onClick={logout} className='text-decoration-none text-dark px-3 py-2 ms-2 d-block d-lg-inline-block'>{localStorage.email} <button>Logout</button></NavLink>
                                                      </span>
                                                      :
                                                      <NavLink to="/login" className='text-decoration-none text-dark px-3 py-2 ms-2'>Login</NavLink>
                                    }
                              </Nav>
                        </Navbar.Collapse>
                  </Container>
            </Navbar>
      );
};

export default Header;