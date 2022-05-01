import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {


      const getChecked = (event) => {
            const checkbox = document.getElementById('checkbox')
            const button = document.getElementById("submit");
            if (checkbox.checked) {
                  button.removeAttribute("disabled")
            } else {
                  button.setAttribute("disabled", "")
            }
      }

      return (
            <div className='mt-5 pt-4 d-flex align-items-center'>
                  <form className='col-10 col-md-6 p-3 shadow mt-5 mx-auto text-start rounded'>
                        <h2 className='text-center'>Login</h2>
                        <div className="form-group my-3">
                              <label htmlFor="exampleInputEmail1">Email address</label>
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group my-3">
                              <label htmlFor="exampleInputPassword1">Password</label>
                              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        {/* <div className="form-check my-3">
                              <input type="checkbox" className="form-check-input" id="checkbox" onChange={() => getChecked()} />
                              <label className="form-check-label" htmlFor="checkbox">Check me out</label>
                        </div> */}
                        <button type="submit" id='submit' disabled className="btn btn-primary">Submit</button>

                        <p>New to Luxurious Car? <Link to="/register">Please Register</Link></p>
                  </form>
            </div>
      );
};

export default Login;