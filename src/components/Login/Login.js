import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faGoogle,faFacebook } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div  className='login'>
            <div className="loginCard">
                <div className="top">
                    <FontAwesomeIcon className='logo' icon={faCommentDots}/>
                    <h2>Login</h2>
                </div>
                <div className="bottom">
                   <input type="text" placeholder='Enter Your Phone/Email' />
                   <input type="text" placeholder='Enter Your Password' />
                   <small>Forget password</small>
                   <button className='loginBtn'>Login</button>
                   <button className='crateBtn'>Create an account</button>
                   <h6>or</h6> <hr />
                   <FontAwesomeIcon className='brand' icon={faGoogle} />


                </div>

            </div>
            
        </div>
    );
};

export default Login;