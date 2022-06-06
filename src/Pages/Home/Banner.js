import React from 'react';
import tools1 from '../../assets/images/tools1.jpg';
import tools2 from '../../assets/images/tools2.jpg';
import tools3 from '../../assets/images/tools3.jpg';
import tools4 from '../../assets/images/tools4.jpg';

const Banner = () => {
    return (
        <div>

            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img alt='tools-img' src={tools2} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img alt='tools-img' src={tools1} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img alt='tools-img' src={tools3} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img alt='tools-img' src={tools4} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

        </div>

    );
};

export default Banner;