 import { faMessageSd,faUser,faStar,faCalendarCheck} from '@fortawesome/free-solid-svg-icons';
import { faMessage,faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import React from 'react';
import DashBoard from './DashBoard/DashBoard';
import './Home.css'
const Home = () => {
    return (
        <section className='home'>
            <div className="row">
                <div className="sidebar col-md-1">
                    <dl>
                        <FontAwesomeIcon className='messageIcon sidebarIcon' icon={faCommentDots}/>
                        <FontAwesomeIcon className=' sidebarIcon' icon={faUser}/>
                        <FontAwesomeIcon className=' sidebarIcon' icon={faStar}/>
                        <FontAwesomeIcon className=' sidebarIcon' icon={faCalendarCheck}/> 
                    </dl>
                </div>
               <div className='col col-md-11'>
               <DashBoard></DashBoard>
               </div>
            </div>



        </section>
    );
};

export default Home;