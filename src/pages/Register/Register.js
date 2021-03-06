import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import { getAuth } from "firebase/auth";
import { Helmet } from 'react-helmet-async';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import "./Register.css"

const auth = getAuth(app)

const Register = () => {
      const navigate = useNavigate();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const displayName = firstName + ' ' + lastName

      const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
      const [sendEmailVerification] = useSendEmailVerification(auth);

      const register = (event) => {
            event.preventDefault();
            sendEmailVerification(email);
            createUserWithEmailAndPassword(email, password, firstName, lastName)
                  .then(result => {
                        console.log(result)
                  })
                  .catch(error => console.error(error));

            if (user) {
                  console.log(user);
                  localStorage.setItem("name", displayName);
                  navigate(`/car/${localStorage.getItem('id') ? localStorage.getItem('id') : ""}`)
                  sessionStorage.removeItem("id");
                  window.location.reload()
            }
      }

      return (
            <Container className='mt-5 pt-5 position-relative'>
                  <Helmet>
                        <title>Register - Luxurious Car</title>
                  </Helmet>
                  <form className='shadow p-4 col-12 col-md-10 col-lg-7 mx-auto'>
                        <h1>Please Register</h1>
                        <div className="row">
                              <div className="col-12 col-md-6 my-2">
                                    <input type="text" placeholder='First Name' className='form-control' id='firstName' onBlur={e => setFirstName(e.target.value)} />
                              </div>
                              <div className="col-12 col-md-6 my-2">
                                    <input type="text" placeholder='Last Name' className='form-control' id='lastName' onBlur={e => setLastName(e.target.value)} />
                              </div>
                              <div className="col-12 my-2">
                                    <input type="email" placeholder='Enter Your Email Here' className='form-control' id="email" onBlur={e => setEmail(e.target.value)} />
                              </div>
                              <div className="col-12 my-2">
                                    <input type="password" placeholder='Create a Strong Password' className='form-control' id="password" onBlur={e => setPassword(e.target.value)} />
                              </div>
                              <div className="form-check text-start my-3">
                                    <input type="checkbox" className="form-check-input" id="checkbox" />
                                    <label className="form-check-label" htmlFor="checkbox">I Agree with <Link to="/terms" className='text-decoration-none text-danger'>terms and conditions</Link></label>
                              </div>
                        </div>
                        <button className='btn btn-success mx-auto' onClick={register}>Create Account</button>
                        <p className='pt-3'>Already a Member? <Link to="/login">Login</Link></p>
                  </form>

            </Container>
      );
};

export default Register;