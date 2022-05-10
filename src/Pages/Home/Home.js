import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import DoctorSection from './DoctorSection';
import InfoCards from './infoCards';
import Services from './Services';
import Testimonials from './Testimonials';

function Home() {
    return (
        <div>
            <Banner />
            <InfoCards />
            <Services />
            <DoctorSection />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
