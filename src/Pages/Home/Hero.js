import React from 'react';
import hero from '../../assets/images/chair.png';

const Hero = () => (
    <div className="hero bg-heroBg md:min-h-[750px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img
                src={hero}
                className="max-w-xs rounded-lg shadow-2xl  sm:max-w-sm lg:max-w-xl"
                alt="doctor"
            />
            <div>
                <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                <p className="py-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry&apos;s standard dummy text ever since the
                </p>
                <button type="button" className="btn btn-primary">
                    Get Started
                </button>
            </div>
        </div>
    </div>
);

export default Hero;
