import React from 'react';
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


                <div className="profile col-md-3">
                    <h5>Profile</h5>
                </div>
            </div>



        </section>
    );
};

export default Home;