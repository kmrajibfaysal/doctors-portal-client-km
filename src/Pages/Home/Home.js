import React from 'react';
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
        </div>
    );
}

export default Home;
