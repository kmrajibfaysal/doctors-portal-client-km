import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCards from './InfoCard';

const infos = [
    {
        _id: 1,
        title: 'Opening hours',
        description: 'Lorem ipsum is simply dummy text of the pri',
        img: clock,
        bgClass: 'bg-gradient-to-r from-secondary to-primary',
    },
    {
        _id: 2,
        title: 'Visit our Location',
        description: 'Lorem ipsum is simply dummy text of the pri',
        img: marker,
        bgClass: 'bg-accent',
    },
    {
        _id: 3,
        title: 'Contact us now',
        description: 'Lorem ipsum is simply dummy text of the pri',
        img: phone,
        bgClass: 'bg-gradient-to-r from-secondary to-primary',
    },
];

function Info() {
    return (
        <div className="container mx-auto mt-24 flex flex-col items-center justify-center space-y-8 space-x-0 md:mt-6 md:flex-row md:space-y-0 md:space-x-5">
            {infos.map((info) => (
                <InfoCards key={info._id} info={info} />
            ))}
        </div>
    );
}

export default Info;
