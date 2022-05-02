import { getAuth, GoogleAuthProvider, signInWithPopup, } from 'firebase/auth';
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

      return (
            <div className="row">
                  <button className='btn btn-outline-success my-2' onClick={HandleGoogleSignIn}>Continue with Google</button>
                  <button className='btn btn-outline-dark my-2'>Continue with Github</button>
                  <button className='btn btn-outline-info my-2'>Continue with Twitter</button>
            </div>
      );
};

export default SocialRegister;