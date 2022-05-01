import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
      const [email, setEmail] = useState([])
      const [password, setPassword] = useState([])
      const button = document.getElementById('submit');

      const handleButton = () => {
            if (email.length > 5 && password.length > 8) {
                  button.removeAttribute("disabled")
            }

      }

      const login = event => {
            event.preventDefault()
            console.log(email.length, password.length);
      }



      return (
            <div className='mt-5 pt-4 d-flex align-items-center'>
                  <form className='col-10 col-md-6 p-3 shadow mt-5 mx-auto text-start rounded'>
                        <h2 className='text-center'>Login</h2>
                        <div className="form-group my-3">
                              <label htmlFor="exampleInputEmail1">Email address</label>
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onBlur={e => setEmail(e.target.value)} onChange={handleButton} required />
                              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group my-3">
                              <label htmlFor="exampleInputPassword1">Password</label>
                              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onBlur={e => setPassword(e.target.value)} onChange={handleButton} required />
                        </div>
                        <button type="submit" id='submit' className="btn btn-primary" disabled onClick={login}>Login</button>

                        <p>New to Luxurious Car? <Link to="/register">Please Register</Link></p>
                  </form>
            </div>
      );
};

export default Login;