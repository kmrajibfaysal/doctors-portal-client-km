/* eslint-disable no-unused-vars */
import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

function AvailableAppointment({ selected }) {
    // const [services, setServices] = useState([]);

    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(selected, 'PP');

    // using react query
    const {
        isLoading,
        error,
        data: services,
        refetch,
    } = useQuery(['available', selected], () =>
        fetch(
            `https://doctors-portal-server-km.herokuapp.com/available?date=${formattedDate}`
        ).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }

    // old method
    // useEffect(() => {
    //     const formattedDate = format(selected, 'PP');
    //     fetch(`https://doctors-portal-server-km.herokuapp.com/available?date=${formattedDate}`)
    //         .then((res) => res.json())
    //         .then((data) => setServices(data));
    // }, [selected]);

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
                {services?.map((service) => (
                    <Service key={service._id} service={service} setTreatment={setTreatment} />
                ))}
            </div>
            {treatment && (
                <BookingModal
                    refetch={refetch}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    selected={selected}
                />
            )}
        </div>
    );
}

export default AvailableAppointment;
