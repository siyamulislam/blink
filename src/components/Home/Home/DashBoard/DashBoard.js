import React, { useContext, useEffect, useState } from 'react';
import './Dashboard.css'
import user from './../../../../images/user-siam.jpg'
import userAnna from './../../../../images/anna-morgan.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUserFriends, faCog, faUser, faCircleDot, faSignOut, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faBell, } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';

import SocketIO from 'socket.io-client';
import Message from './Message/Message';

import ReactScrollToBottom from 'react-scroll-to-bottom';
import Profile from './Profile/Profile';
const ENDPOINT = 'http://192.168.0.113:4500';
// const ENDPOINT2 = 'http://localhost:4500/' ;
let socket;

const DashBoard = () => {
    const [loggedInUser] = useContext(UserContext);
    const { name, url } = loggedInUser;
    const [id, setId] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket = SocketIO(ENDPOINT, { transports: ['websocket'] });
        socket.on('connect', () => {
            console.log('connected');
            setId(socket.id)
        })
        console.log(socket)
        
        socket.emit('joined', { loggedInUser })

       
      
        return () => {
            socket.emit('disconnected');
            socket.off();
        };
    }, []);

    useEffect(() => {
        socket.on('sendMessage', (data) => {
            console.log(data.user, data.message, data.id);
            data.id === id ? data.self = true : data.self = false;
            setMessages([...messages, data]);
        });
        socket.on('welcome', (data) => {
            console.log(data.user, data.message);
            setMessages([...messages, data]);
        });
        socket.on('userJoined', (data) => {
            console.log(data.user, data.message);
            setMessages([...messages, data]);
        })
        socket.on('leave', (data) => {
            console.log(data.user, data.message);
            setMessages([...messages, data]);
        })

        return () => {
            socket.off()
        };
    }, [messages]);

    const sendMessage = () => {
        const message = document.getElementById('txtMessage').value;
        socket.emit('message', { message, id })
        document.getElementById('txtMessage').value = ''
    }
    return (
        <div className='Dashboard row'>
            <div className="chat col-md-12">
               <div className="header d-flex justify-content-between">
               <h1 className='py-3'>Messages</h1>
                <div className="right d-flex justify-content-end  align-items-center p-2">
                    <FontAwesomeIcon icon={faBell} />
                    <h6 className='mx-1'>{name}</h6>
                    <img src={loggedInUser.url ? url : user} width='45px' className=' mr-1' alt="" />
                    <Link to={'/login'}> <FontAwesomeIcon icon={faSignOut} /></Link>
                </div>
               </div>
                <div className="row gx-1">
                    <div className="chatList col-md-3">
                        <input type="text" id='search' placeholder='&#x1F50E;&#xFE0E; Search People or Message' />
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
                    <div className="chatText col-md-9">
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
                            <ReactScrollToBottom className="messageBody">
                                <div className="lastSeen d-flex justify-content-between align-items-center">
                                    <hr /><p className='text-main'>Today</p><hr />
                                </div>
                                {
                                    messages.map((item, i) => <Message key={i} data={item}></Message>)
                                }
                            </ReactScrollToBottom>
                            <div className="sendCard">
                                <textarea placeholder='text message' cols="40" rows="1" id='txtMessage' className='messageText'></textarea>
                                <FontAwesomeIcon className='fileIcon ' icon={faPaperclip} />
                                <FontAwesomeIcon onClick={() => { sendMessage() }} className='sendIcon' icon={faPaperPlane} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                         
            
        </div>
    );
};

export default DashBoard;