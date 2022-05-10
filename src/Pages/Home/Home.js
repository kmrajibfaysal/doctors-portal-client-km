import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import DoctorSection from './DoctorSection';
import InfoCards from './infoCards';
import Service from './Service';
import Testimonials from './Testimonials';

const Home = () => (
    <div>
        <Banner />
        <InfoCards />
        <Service />
        <DoctorSection />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
);

export default Home;
