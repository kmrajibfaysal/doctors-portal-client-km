import React from 'react';
import Footer from '../../Shared/Footer';
import Appointment from './Appointment';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

function Home() {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <Appointment />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
