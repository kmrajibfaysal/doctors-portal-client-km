import React, { useState } from 'react';
import AvailableAppointment from './AvailableAppointment';
import Banner from './Banner';

function Appointment() {
    const [selected, setSelected] = useState();
    return (
        <div>
            <Banner selected={selected} setSelected={setSelected} />
            <AvailableAppointment selected={selected} setSelected={setSelected} />
        </div>
    );
}

export default Appointment;
