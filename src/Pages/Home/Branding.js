import React from 'react';
import wholesale from '../../assets/images/wholesale.PNG';
import bannerin from '../../assets/images/bannerin.jpg';


const Branding = () => {
    return (
        <div style={{ background: `url(${wholesale})` }} className='bg-primary px-10 py-14'>
            <div className="card w-96 glass">
                <figure><img src={bannerin} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Branding;