/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import treatment from '../../assets/images/treatment.png';

const ServiceBanner = () => (
    <div className="hero-content mt-16 flex-col items-center md:mt-32 lg:flex-row-reverse">
        <div className="order-1 md:order-2">
            <img
                src={treatment}
                className="max-h-[576px] w-full max-w-[458px] rounded-lg shadow-2xl md:mx-0"
                alt="doctor"
            />
        </div>
        <div className="order-2 mt-5 md:order-1 md:ml-24 md:max-w-md">
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsumis that
                it has a more-or-less normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many desktop publishing
                packages and web page
            </p>
            <button
                type="button"
                className="btn transform border-0 bg-gradient-to-r from-secondary to-primary uppercase text-white hover:scale-105"
            >
                Get Started
            </button>
        </div>
    </div>
);

export default ServiceBanner;
