import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

function AvailableAppointment({ selected }) {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [services]);

    return (
        <div className="container mx-auto my-24 md:my-32">
            <div className="mb-12 text-center md:mb-24">
                {selected ? (
                    <p className="text-xl text-secondary">
                        Available Appointments on {format(selected, 'PP')}
                    </p>
                ) : (
                    <p className="text-xl text-secondary">Please a pick a date!</p>
                )}
            </div>
            <div className="lg:gap:6 mx-auto grid max-w-7xl grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <Service key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
}

export default AvailableAppointment;
