import React from 'react';
import hero from '../../assets/images/chair.png';
import MainButton from '../../Shared/MainButton';

function Banner() {
    return (
        <div className="hero bg-opacity-50 bg-heroBg md:min-h-[750px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={hero}
                    className="mx-10 w-full rounded-lg shadow-2xl md:mx-0  lg:max-w-xl"
                    alt="doctor"
                />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
                    </p>
                    <MainButton title="Get Started" />
                </div>
            </div>
        </div>
    );
}

export default Banner;
