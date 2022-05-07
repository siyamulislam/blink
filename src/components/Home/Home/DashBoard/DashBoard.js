import React from 'react';
import './Dashboard.css'
import logo from './../../../../logo.svg'
const DashBoard = () => {
    return (
        <div className='Dashboard row'>
            <div className="chat col-md-8">
                <h3>Message</h3>
                <div className="row gx-1">
                    <div className="chatList col-md-4">
                        <input type="text" placeholder='Search People or Message' />
                    </div>
                    <div className="chatText col-md-8">
                        <h4>Anna</h4>
                    </div>
                </div>
            </div>


            <div className="profile col-md-4">
                <div className="d-flex justify-content-end p-2">
                    <h5>Bell</h5>
                    <h3>Profile</h3>
                </div>
                <div className="body">
                    <img src={logo} width='100px' alt="" />
                    <h5>Anna Morgan</h5>
                    <h6>Co-Worker</h6>
                    <p>Dhaka, Bangladesh</p>
                    <div className='bg-main my-2'>
                        <p className='p-1'>More Information  </p>
                    </div>
                    <div className="contactInfo ">
                        <div className='d-flex justify-content-between'>
                            <h6 className='text-align-start'>Contact Information </h6>
                            <p className='text-primary'>add new</p>
                        </div>
                        <hr />
                        <p><span>i-con</span> annamorgan@gmail.com</p>
                        <p><span>i-con</span> +88017170000000</p>
                        <p><span>i-con</span> annaMorgan1</p>
                        <hr />
                    </div>
                    <div className="AttachmentsInfo">
                        <div className='d-flex justify-content-between'>
                            <h6 className='text-align-start'>Attachments (100)</h6>
                            <p className='text-primary'>view all</p>
                        </div>
                        <hr />
                        <img src={logo} width='100px' alt="" />
                        <img src={logo} width='100px' alt="" />
                        <img src={logo} width='100px' alt="" />
                        <img src={logo} width='100px' alt="" />
                        <img src={logo} width='100px' alt="" />
                        <img src={logo} width='100px' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;