import React from 'react';
import Banner from './Banner';
import DoctorSection from './DoctorSection';
import InfoCards from './infoCards';
import Service from './Service';

const Home = () => (
    <div>
        <Banner />
        <InfoCards />
        <Service />
        <DoctorSection />
    </div>
);

export default Home;
