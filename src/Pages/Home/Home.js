import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import DoctorSection from './DoctorSection';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

function Home() {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <DoctorSection />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
