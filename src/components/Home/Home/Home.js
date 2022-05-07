import React from 'react';
import DashBoard from './DashBoard/DashBoard';
import './Home.css'
const Home = () => {
    return (
        <section className='home'>
            <div className="row">
                <div className="sidebar col-md-1">
                    <dl>
                        <li>icon</li>
                        <li>icon</li>
                        <li>icon</li>
                        <li>icon</li>
                        <li>icon</li>
                        <li>icon</li>
                        <li>icon</li>
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