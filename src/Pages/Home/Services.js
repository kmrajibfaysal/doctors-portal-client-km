/* eslint-disable no-underscore-dangle */
import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import ServiceBanner from './ServiceBanner';
import ServiceCard from './ServiceCard';

function Services() {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride,
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity,
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening,
        },
    ];

    return (
        <div className="container mx-auto mt-16 md:mt-32 ">
            <div className="my-20 text-center">
                <h4 className=" text-xl font-bold uppercase text-secondary">our services</h4>
                <h2 className="text-4xl">Services We Provide</h2>
            </div>
            <div className="flex w-full flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-6">
                {services.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>

            <ServiceBanner />
        </div>
    );
}

export default Services;
