import React from 'react';
import mypic from '../../assets/images/mypic.jpg'

const Portfolio = () => {
    return (
        <div className="hero h-screen" style={{ background: `url(${mypic})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">I am Tafhimul Islam Akash from Bogra.</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
