/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

function MyAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then((res) => res.json())
                .then((data) => setAppointments(data));
        }
    }, [user]);

    return (
        <div className="overflow-x-auto">
            <h3 className="text-5xl">{console.log(appointments)}</h3>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th />
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((ap, index) => (
                        <tr key={ap._id}>
                            <th>{index + 1}</th>
                            <td>{ap.patientName}</td>
                            <td>{ap.date}</td>
                            <td>{ap.slot}</td>
                            <td>{ap.treatment}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MyAppointments;
