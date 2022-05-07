import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import app from '../../../firebase.init';

const SocialRegister = () => {
      const auth = getAuth(app);
      const navigate = useNavigate();

      const HandleGoogleSignIn = (event) => {
            event.preventDefault();
            const provider = new GoogleAuthProvider();

            signInWithPopup(auth, provider)
                  .then(result => {
                        localStorage.setItem("name", result.user.displayName);
                        localStorage.setItem("email", result.user.email);

                        navigate(`/car/${localStorage.getItem("id")}`);
                        window.location.reload()
                  })
      }

      const handleGithubSignIn = event => {
            event.preventDefault();

            const provider = new GithubAuthProvider();

            signInWithPopup(auth, provider)
                  .then(result => {
                        localStorage.setItem("name", result.user.displayName);
                        localStorage.setItem("email", result.user.email);

                        navigate(`/car/${localStorage.getItem("id")}`);
                        window.location.reload()
                  })
      }

      return (
            <div>
                  <button className='col-12 col-md-5 btn btn-outline-success mx-2 my-2' onClick={HandleGoogleSignIn}>Continue with Google</button>
                  <button className='col-12 col-md-5 btn btn-outline-dark mx-2 my-2' onClick={handleGithubSignIn}>Continue with Github</button>
            </div>
      );
};

export default SocialRegister;