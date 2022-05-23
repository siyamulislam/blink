import React, { useContext } from 'react';
import './Dashboard.css'
import logo from './../../../../logo.svg'
import user from './../../../../images/user-siam.jpg'
import userAnna from './../../../../images/anna-morgan.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faFileAlt, faUserFriends, faCog, faUser, faCircleDot,faSignOut,faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell, } from '@fortawesome/free-regular-svg-icons'; 
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    const {email, name, url} =loggedInUser;  
    return (
        <div className='Dashboard row'>
            <div className="chat col-md-8">
                <h1 className='py-3'>Messages</h1>
                <div className="row gx-1">
                    <div className="chatList col-md-4">
                        <input type="text" className='search' placeholder='&#x1F50E;&#xFE0E; Search People or Message' />
                        <div className="chatType d-flex justify-content-around my-4">
                            <FontAwesomeIcon className='chatTypeIcon userIcon' icon={faUser} />
                            <FontAwesomeIcon className='chatTypeIcon  ' icon={faUserFriends} />
                            <FontAwesomeIcon className='chatTypeIcon  ' icon={faCog} />
                            <div>
                            </div>
                        </div> 

                        <div className="chatItemCard  d-flex justify-content-around align-items-center">
                            <img src={userAnna} width='50px' alt="" />
                            <div className="chatItemInfo my-2 mx-1">
                                <div className="infoHead my-1 d-flex justify-content-between ">
                                    <h6 >Anna Morgan</h6>
                                    <p><small>08:45AM</small></p>
                                </div>
                                <p>Lorem ipsum dolor sit amet csicing elit.</p>
                            </div>
                        </div>
                        <div className="chatItemCard  d-flex justify-content-around align-items-center">
                            <img src={userAnna} width='50px' alt="" />
                            <div className="chatItemInfo my-2 mx-1">
                                <div className="infoHead my-1 d-flex justify-content-between ">
                                    <h6 >Anna Morgan</h6>
                                    <p><small>08:45AM</small></p>
                                </div>
                                <p>Lorem ipsum dolor sit amet csicing elit.</p>
                            </div>
                        </div>
                        <div className="chatItemCard  d-flex justify-content-around align-items-center">
                            <img src={userAnna} width='50px' alt="" />
                            <div className="chatItemInfo my-2 mx-1">
                                <div className="infoHead my-1 d-flex justify-content-between ">
                                    <h6 >Anna Morgan</h6>
                                    <p><small>08:45AM</small></p>
                                </div>
                                <p>Lorem ipsum dolor sit amet csicing elit.</p>
                            </div>
                        </div>
                        <div className="chatItemCard  d-flex justify-content-around align-items-center">
                            <img src={userAnna} width='50px' alt="" />
                            <div className="chatItemInfo my-2 mx-1">
                                <div className="infoHead my-1 d-flex justify-content-between ">
                                    <h6 >Anna Morgan</h6>
                                    <p><small>08:45AM</small></p>
                                </div>
                                <p>Lorem ipsum dolor sit amet csicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="chatText col-md-8">
                        <div className="chatUserCard d-flex justify-content-between align-items-center">
                            <div className="userInfo d-flex justify-content-start ">
                                <img src={userAnna} width='50px' alt="" />
                                <div className="chatItemInfo">
                                    <h6>Anna Morgan</h6>
                                    <p><FontAwesomeIcon icon={faCircleDot} size='xs' color='green' /> Online</p>
                                </div>
                            </div>
                            <h3>:</h3>
                        </div>
                        <div className="messageCard">
                            <div className="messageBody">
                                <div className="lastSeen d-flex justify-content-between align-items-center">
                                    <hr /><p className='text-main'>Today</p><hr />
                                </div>
                                <div className="senderContainer">
                                    <div className="senderCard">
                                        <div className="senderBody">
                                            <img src={userAnna} className="align-self-end" width="40px" alt="" />
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto odit corrupti nostrum quaerat facilis unde?</p>
                                            <h2 className='text-main align-self-end'>...</h2>
                                        </div>
                                        <p>10:34 PM</p>
                                    </div>
                                </div>

                                <div className="senderContainer">
                                    <div className="senderCard">
                                        <div className="senderBody">
                                            <img src={userAnna} className="align-self-end" width="40px" alt="" />
                                            <p>Lorem ips unde?</p>
                                            <h2 className='text-main align-self-end'>...</h2>
                                        </div>
                                        <p>10:34 PM</p>
                                    </div>
                                </div>

                                <div className="receiverContainer">
                                    <div className="receiverCard">
                                        <div className="receiverBody">
                                            <h2 className='text-main align-self-end'>...</h2>
                                            <p> uptatum!</p>
                                            <img src={url} className="align-self-end" width="40px" alt="" />
                                        </div>
                                        <p>10:34 PM</p>
                                    </div>
                                </div>
                                <div className="receiverContainer">
                                    <div className="receiverCard">
                                        <div className="receiverBody">
                                            <h2 className='text-main align-self-end'>...</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat corporis eius nesciunt alias voluptatum!</p>
                                            <img src={url} className="align-self-end " width="40px" alt="" />
                                        </div>
                                        <p>10:34 PM</p>
                                    </div>
                                </div>


                            </div>
                            <div className="sendCard">
                                <textarea placeholder='text message' cols="40" rows="1" className='messageText'></textarea>
                                <FontAwesomeIcon className='fileIcon ' icon={faFileAlt} />
                                <FontAwesomeIcon className='sendIcon' icon={faPaperPlane} /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile col-md-4">
                <div className="top d-flex justify-content-end  align-items-center p-2">
                    <FontAwesomeIcon icon={faBell} />
                    <img src={loggedInUser.url? url:user} width='45px' className=' mr-1' alt="" />  
                   <Link to={'/login'}> <FontAwesomeIcon icon={faSignOut} /></Link>
                </div>
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
                            <p><span><FontAwesomeIcon className='contactInfoIcon' icon={faEnvelope}/></span> annamorgan@gmail.com</p>
                            <p><span><FontAwesomeIcon className='contactInfoIcon' icon={faPhone}/></span> +88017170000000</p>
                            <p><span><FontAwesomeIcon className='contactInfoIcon' icon={faUser}/></span> annaMorgan1</p>
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
        </div>
    );
};

export default DashBoard;