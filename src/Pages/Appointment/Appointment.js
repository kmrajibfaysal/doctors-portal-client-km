/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import AvailableAppointment from './AvailableAppointment';
import Banner from './Banner';

function Appointment() {
    const [selected, setSelected] = useState(new Date());
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <Banner selected={selected} setSelected={setSelected} />
            <AvailableAppointment user={user} selected={selected} setSelected={setSelected} />
        </div>
    );
}

export default Appointment;
