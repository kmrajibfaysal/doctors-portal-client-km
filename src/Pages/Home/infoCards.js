import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const InfoCards = () => (
    <div className="container mx-auto mt-4 flex flex-col items-center justify-center space-y-4 space-x-0 md:flex-row md:space-y-0 md:space-x-5">
        <div className="card w-80 items-center justify-around bg-gradient-to-r from-secondary to-primary py-4  text-white shadow-xl md:w-96 md:flex-row md:py-1 md:px-5">
            <div>
                <img src={clock} alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title">Openning hours</h2>
                <p>Lorem Ipsum is simply dummy text of the pri</p>
            </div>
        </div>
        <div className="card w-80 items-center justify-around bg-accent py-4  text-white shadow-xl md:w-96 md:flex-row md:py-1 md:px-5">
            <div>
                <img src={marker} alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title">Visit our location</h2>
                <p>Brooklyn, NY 10036, United States</p>
            </div>
        </div>
        <div className="card w-80 items-center justify-around bg-gradient-to-r from-secondary to-primary py-4  text-white shadow-xl md:w-96 md:flex-row md:py-4 md:px-5">
            <div>
                <img src={phone} alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title">Contact us now</h2>
                <p>+000 123 456789</p>
            </div>
        </div>
    </div>
);

export default InfoCards;
