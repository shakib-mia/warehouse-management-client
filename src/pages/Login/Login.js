import { getAuth } from 'firebase/auth';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import SocialRegister from './SocialRegister/SocialRegister';
import "./Login.css"

const auth = getAuth(app);

const Login = () => {
      const navigate = useNavigate();

      const [email, setEmail] = useState([])
      const [password, setPassword] = useState([]);
      const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

      let message = document.getElementById("error");

      const forgotPassword = () => {
            sendPasswordResetEmail(email);
      }

      const login = (event) => {
            event.preventDefault();
            signInWithEmailAndPassword(email, password)
      }
      if (user) {
            message.innerText = ""
            localStorage.setItem("email", user.user.email);
            window.location.reload();
            navigate(`/${localStorage.getItem("id") ? localStorage.getItem('id') : ""}`)
      }

      else if (error && !user) {
            message.innerText = "Email or Password Invalid"
      }

      return (
            <div className='mt-5 pt-4 d-flex align-items-center'>
                  <Helmet>
                        <title>Login - Luxurious Car</title>
                  </Helmet>
                  <form className='col-10 col-md-6 p-3 shadow mt-5 mx-auto text-start rounded'>
                        <h2 className='text-center'>Login</h2>
                        <div className="form-group my-3">
                              <label htmlFor="exampleInputEmail1">Email address</label>
                              <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onBlur={e => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group my-3">
                              <label htmlFor="exampleInputPassword1">Password</label>
                              <input type="password" className="form-control" id="inputPassword" placeholder="Password" onBlur={e => setPassword(e.target.value)} required />
                        </div>
                        <p className='text-primary text-decoration-underline forget-pass' onClick={forgotPassword}>Forgot Password?</p>
                        <p className="text-danger" id='error'></p>
                        <button type="submit" id='submit' className="btn btn-primary" onClick={login}>Login</button>

                        <p>New to Luxurious Car? <Link to="/register">Please Register</Link></p>
                        <div className='d-flex align-items-center my-3'>
                              <div className='bg-secondary w-100' style={{ height: "1px" }}></div>
                              <div className='px-3'>or</div>
                              <div className='bg-secondary w-100' style={{ height: "1px" }}></div>
                        </div>

                        <div className="d-flex justify-content-center">
                              <SocialRegister></SocialRegister>
                        </div>
                  </form>
            </div>
      );
};

export default Login;