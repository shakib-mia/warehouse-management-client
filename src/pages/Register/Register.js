import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app)

const Register = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('')
      const register = (event) => {
            event.preventDefault();
            createUserWithEmailAndPassword(auth, email, password)
                  .then(result => {
                        console.log(result)
                  })
                  .catch(err => console.error(err))
      }

      return (
            <Container className='mt-5 pt-5'>
                  <form className='shadow p-4 col-12 col-md-10 col-lg-7 mx-auto'>
                        <h1>Please Register</h1>
                        <div className="row">
                              <div className="col-12 col-md-6 my-2">
                                    <input type="text" placeholder='First Name' className='form-control' id='firstName' />
                              </div>
                              <div className="col-12 col-md-6 my-2">
                                    <input type="text" placeholder='Last Name' className='form-control' id='lastName' />
                              </div>
                              <div className="col-12 my-2">
                                    <input type="email" placeholder='Enter Your Email Here' className='form-control' id="email" onChange={e => setEmail(e.target.value)} />
                              </div>
                              <div className="col-12 my-2">
                                    <input type="password" placeholder='Create a Strong Password' className='form-control' id="password" onChange={e => setPassword(e.target.value)} />
                              </div>
                              <div className="form-check text-start my-3">
                                    <input type="checkbox" className="form-check-input" id="checkbox" />
                                    <label className="form-check-label" htmlFor="checkbox">I Agree with <Link to="/terms" className='text-decoration-none text-danger'>terms and conditions</Link></label>
                              </div>

                        </div>
                        <button className='btn btn-success mx-auto' onClick={register}>Create Account</button>
                        <p className='pt-3'>Already a Member? <Link to="/login">Login</Link></p>
                        <div className='d-flex align-items-center my-3'>
                              <div className='bg-secondary w-100' style={{ height: "1px" }}></div>
                              <div className='px-3'>or</div>
                              <div className='bg-secondary w-100' style={{ height: "1px" }}></div>
                        </div>

                        <div className="row">
                              <button className='btn btn-outline-success my-2'>Continue with Google</button>
                              <button className='btn btn-outline-dark my-2'>Continue with Github</button>
                              <button className='btn btn-outline-info my-2'>Continue with Twitter</button>
                        </div>
                  </form>
            </Container>
      );
};

export default Register;