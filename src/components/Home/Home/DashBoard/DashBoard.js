import React from 'react';
import './Dashboard.css'
import logo from './../../../../logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faFileAlt, } from '@fortawesome/free-solid-svg-icons';
const DashBoard = () => {
    return (
        <div className='Dashboard row'>
            <div className="chat col-md-8">
                <h1 className='py-3'>Messages</h1>
                <div className="row gx-1">
                    <div className="chatList col-md-4">
                        <input type="text" className='search' placeholder='Search People or Message' />
                        <div className="chatType d-flex justify-content-between my-4">
                            <h4>icon</h4>
                            <h4>icon</h4>
                            <h4>icon</h4>
                        </div>
                        <div className="chatItemCard  d-flex justify-content-around">
                            <img src={logo} width='80px' alt="" />
                            <div className="chatItemInfo">
                                <h6>Anna Morgan</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="chatItemCard  d-flex justify-content-around">
                            <img src={logo} width='80px' alt="" />
                            <div className="chatItemInfo">
                                <h6>Anna Morgan</h6>
                                <p>Lorem ipsum dtetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="chatItemCard  d-flex justify-content-around">
                            <img src={logo} width='80px' alt="" />
                            <div className="chatItemInfo">
                                <h6>Anna Morgan</h6>
                                <p>Lorem ipsum dolor sit amet cing elit.</p>
                            </div>
                        </div>
                        <div className="chatItemCard  d-flex justify-content-around">
                            <img src={logo} width='80px' alt="" />
                            <div className="chatItemInfo">
                                <h6>Anna Morgan</h6>
                                <p>Lorem ipsum dolor sit amet csicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="chatText col-md-8">
                        <div className="chatUserCard d-flex justify-content-between align-items-center">
                            <div className="userInfo d-flex justify-content-start ">
                                <img src={logo} width='80px' alt="" />
                                <div className="chatItemInfo">
                                    <h6>Anna Morgan</h6>
                                    <p>o Online</p>
                                </div>
                            </div>
                            <h3>:</h3>
                        </div>
                        <div className="messageCard">
                            <div className="messageBody">
                                <div className="lastSeen d-flex justify-content-between align-items-center">
                                    <hr /><p className='text-main'>Today</p><hr />
                                </div>
                                <div className="senderCard">
                                    <div className="senderBody">
                                        <img src={logo} className="align-self-end" width="40px" alt="" />
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto odit corrupti nostrum quaerat facilis unde?</p>
                                        <h2 className='text-main align-self-end'>...</h2>
                                    </div>
                                    <p>10:34 PM</p>
                                </div>
                                <div className="senderCard">
                                    <div className="senderBody">
                                        <img src={logo} className="align-self-end" width="40px" alt="" />
                                        <p>Lorem ips unde?</p>
                                        <h2 className='text-main align-self-end'>...</h2>
                                    </div>
                                    <p>10:34 PM</p>
                                </div>
                                
                                <div className="receiverCard">

                                </div>
                                <h1>fddf</h1>
                                <h1>fddf</h1>
                                <h1>fddf</h1>
                                <h1>fddf</h1>
                                <h1>fddf</h1>
                                <h1>fddf</h1>
                                <h1>fddf</h1>
                                <h1>fddf</h1>
                                <h1>fddf</h1>
                                <h1>fddf</h1>
                                <h1>fddf</h1>
                            </div>
                            <div className="sendCard">
                                <textarea placeholder='text message' cols="3" rows="1" className='messageText'></textarea>
                                <FontAwesomeIcon className='fileIcon ' icon={faFileAlt} />
                                <FontAwesomeIcon className='sendIcon' icon={faPaperPlane} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="profile col-md-4">
                <div className="d-flex justify-content-end p-2">
                    <h5>Bell</h5>
                    <h1>Profile</h1>
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