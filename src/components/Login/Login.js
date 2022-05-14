import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div  className='login'>
            <div className="loginCard">
                <div className="top">
                    <FontAwesomeIcon className='logo' icon={faCommentDots}/>
                    <h1>Login</h1>
                </div>

            </div>
            
        </div>
    );
};

export default Login;