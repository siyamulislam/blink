import React from 'react';
import './Message.css'
import userAnna from '../../../../../images/anna-morgan.jpg'
import userIMG from '../../../../../images/user-siam.jpg'

const Message = (props) => {
    const { user, message, self } = props.data;
    return (
        <div className="message">
            {self ?
                <div className="userContainer">
                    <div className="userCard">
                        <div className="userBody">
                            <h2 className='text-main align-self-end'>...</h2>
                            <p>{` ${message} : You`} </p>
                            <img src={userIMG} className="m-1  align-self-end" width="40px" alt="" />
                        </div>
                        <p>10:34 PM</p>
                    </div>
                </div>
                :
                <div className="clientContainer">
                    <div className="clientCard">
                        <div className="clientBody">
                            <img src={userAnna} className="m-1  align-self-end" width="40px" alt="" />
                            <p>{`${user}: ${message}`} </p>
                            <h2 className='text-main align-self-end'>...</h2>
                        </div>
                        <p>10:34 PM</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default Message;