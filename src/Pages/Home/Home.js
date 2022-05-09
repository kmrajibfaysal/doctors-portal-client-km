import React from 'react';
import Footer from '../../Shared/Footer';
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
        <Footer />
    </div>
);

export default Home;
