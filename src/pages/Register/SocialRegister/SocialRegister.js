import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, } from 'firebase/auth';
import React from 'react';
import app from '../../../firebase.init';

const SocialRegister = () => {
      const auth = getAuth(app);

      const HandleGoogleSignIn = (event) => {
            event.preventDefault();
            const provider = new GoogleAuthProvider();

            signInWithPopup(auth, provider)
                  .then(result => {
                        console.log(result.user)
                  })
      }

      const handleGithubSignIn = event => {
            event.preventDefault();

            const provider = new GithubAuthProvider();

            signInWithPopup(auth, provider)
                  .then(result => {
                        console.log(result.user)
                  })
      }

      return (
            <div className="d-flex justify-content-around">
                  <button className='btn btn-outline-success my-2' onClick={HandleGoogleSignIn}>Continue with Google</button>
                  <button className='btn btn-outline-dark my-2' onClick={handleGithubSignIn}>Continue with Github</button>
            </div>
      );
};

export default SocialRegister;