/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import quoteMask from '../../assets/icons/quote.svg';
import p1 from '../../assets/images/people1.png';
import p2 from '../../assets/images/people2.png';
import p3 from '../../assets/images/people3.png';
import Testimonial from './Testimonial';

const patients = [
    {
        _id: 1,
        name: 'Opening hours',
        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        img: p1,
        place: 'California',
    },
    {
        _id: 2,
        name: 'Opening hours',
        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        img: p2,
        place: 'California',
    },
    {
        _id: 3,
        name: 'Opening hours',
        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        img: p3,
        place: 'California',
    },
];

function Testimonials() {
    return (
        <div className="container mx-auto min-h-[514px] px-4 py-24">
            <div className="mb-24 flex justify-between">
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-secondary">Testimonials</h2>
                    <p className="mt-2 text-4xl text-gray-600">What others say about us</p>
                </div>
                <div>
                    <img src={quoteMask} className="w-24 md:w-48" alt="" />
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-2">
                {patients.map((patient) => (
                    <Testimonial key={patient._id} patient={patient} />
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
