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
                        localStorage.setItem("name", result.user.displayName)
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
            <div>
                  <button className='col-12 col-md-5 btn btn-outline-success mx-2 my-2' onClick={HandleGoogleSignIn}>Continue with Google</button>
                  <button className='col-12 col-md-5 btn btn-outline-dark mx-2 my-2' onClick={handleGithubSignIn}>Continue with Github</button>
            </div>
      );
};

export default SocialRegister;