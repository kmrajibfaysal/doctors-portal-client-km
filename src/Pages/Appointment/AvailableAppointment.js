import { format } from 'date-fns';
import React from 'react';

function AvailableAppointment({ selected }) {
    return (
        <div className="mt-6 text-center">
            {selected ? (
                <p className="text-xl text-secondary">
                    Available Appointments on {format(selected, 'PP')}
                </p>
            ) : (
                <p className="text-xl text-secondary">Please a pick a date!</p>
            )}
        </div>
    );
}

export default AvailableAppointment;
