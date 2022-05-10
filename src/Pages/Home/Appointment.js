/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import MainButton from '../../Shared/MainButton';

function Appointment() {
    return (
        <div className="bg-blueBg md:mt-32 md:h-[533px]">
            <div className="hero-content mx-auto mt-16 flex-col items-center md:mt-32 lg:flex-row-reverse">
                <div className="order-1 hidden flex-1 md:order-2 lg:block">
                    <img src={doctor} className="mt-[-107px]" alt="doctor" />
                </div>
                <div className="order-2 mt-5 flex-1 md:order-1 md:ml-16 md:max-w-lg">
                    <h4 className="text-xl font-bold uppercase text-secondary">Appointment</h4>
                    <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                    <p className="py-6 text-white">
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of using
                        Lorem Ipsumis that it has a more-or-less normal distribution of letters,as
                        opposed to using 'Content here, content here', making it look like readable
                        English. Many desktop publishing packages and web page
                    </p>
                    <MainButton title="Get Started" />
                </div>
            </div>
        </div>
    );
}

export default Appointment;
