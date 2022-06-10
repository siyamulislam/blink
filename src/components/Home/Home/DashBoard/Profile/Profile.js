import React from 'react';
import './Profile.css'
import logo from './../../../../../logo.svg' 
import userAnna from './../../../../../images/anna-morgan.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser,  faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    return (
        <div className="Profile col-md-4">
        <div className="body">
            <div className="charUser">
                <img src={userAnna} width='70px' alt="" />
                <h5>Anna Morgan</h5>
                <h6 className='m-1'>Co-Worker</h6>
                <p>Dhaka, Bangladesh</p>
                <div className='bg-main my-1'>
                    <p className='px-5 py-1 mx-4'>More Information  </p>
                </div>
            </div>
            <div className="contactInfo ">
                <div className='d-flex justify-content-between align-items-center'>
                    <h6 className='text-align-start'>Contact Information </h6>
                    <p className='text-primary'>add new</p>
                </div>
                <hr />
                <div className="my-1">
                    <p><span><FontAwesomeIcon className='contactInfoIcon' icon={faEnvelope} /></span> annamorgan@gmail.com</p>
                    <p><span><FontAwesomeIcon className='contactInfoIcon' icon={faPhone} /></span> +88017170000000</p>
                    <p><span><FontAwesomeIcon className='contactInfoIcon' icon={faUser} /></span> annaMorgan1</p>
                </div>
                <hr />
            </div>

            <div className="attachmentInfo">
                <div className='d-flex justify-content-between align-items-center'>
                    <h6 className='text-align-start '>Attachments (100)</h6>
                    <p className='text-primary'>view all</p> 
                </div>
                <hr />
                <img src={logo} width='100px' alt="" />
                <img src={logo} width='100px' alt="" />
                <img src={logo} width='100px' alt="" />
                <img src={logo} width='100px' alt="" />
                <img src={logo} width='100px' alt="" />
                <img src={logo} width='100px' alt="" />
                <hr />   
            </div>
        </div>
    </div>
    );
};

export default Profile;