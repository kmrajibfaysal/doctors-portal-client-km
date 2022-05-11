import React from 'react';
import hero from '../../assets/images/chair.png';
import Calender from './Calender';

function Banner() {
    return (
        <div className="hero bg-opacity-50 bg-heroBg md:min-h-[750px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full md:w-1/2">
                    <img
                        src={hero}
                        className="w-full rounded-lg shadow-2xl md:mx-0  lg:max-w-xl"
                        alt="doctor"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <Calender />
                </div>
            </div>
        </div>
    );
}

export default Banner;
