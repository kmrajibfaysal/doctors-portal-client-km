import React from 'react';
import ServiceBanner from './ServiceBanner';
import ServiceCard from './ServiceCard';

const Service = () => (
    <div className="container mx-auto mt-16 md:mt-32 ">
        <div className="my-20 text-center">
            <h4 className=" text-xl font-bold uppercase text-secondary">our services</h4>
            <h2 className="text-4xl">Services We Provide</h2>
        </div>

        <ServiceCard />
        <ServiceBanner />
    </div>
);

export default Service;
