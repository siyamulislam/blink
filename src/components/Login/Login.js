import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { handelGoogleSignIn ,initializeLoginFramework} from './firebaseManager';
import { useLocation, useNavigate } from 'react-router-dom';
initializeLoginFramework()

const Login = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const googleSignIn = () => {
        handelGoogleSignIn()
            .then(res => {
                console.log(res)
                // setLoggedInUser(res);
                navigate(state?.path || "/")
            })
    }
    return (
        <div className='login'>
            <div className="loginCard">
                <div className="top">
                    <FontAwesomeIcon className='logo' icon={faCommentDots} />
                    <h2>Login</h2>
                </div>
                <div className="bottom">
                    <input type="text" placeholder='Enter Your Phone/Email' />
                    <input type="text" placeholder='Enter Your Password' />
                    <small>Forget password</small>
                    <button className='loginBtn'>Login</button>
                    <button className='crateBtn'>Create an account</button>
                    <div className='d-flex justify-content-between align-items-center py-1 orDiv'>
                        <hr /><small >or</small><hr />

                    </div>

                    <div className="googleSignIN d-flex align-items-center justify-content-center"
                        onClick={() => {
                            googleSignIn();
                        }}
                    >

                        <FontAwesomeIcon className='brand' icon={faGoogle} />
                        <p className='text-white2'>Continue With Google</p>
                    </div>



                </div>

            </div>

        </div>
    );
};

export default Login;