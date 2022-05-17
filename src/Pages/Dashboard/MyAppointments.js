/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

function MyAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            })
                .then((res) => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }

                    return res.json();
                })
                .then((data) => {
                    setAppointments(data);
                });
        }
    }, [user]);

    return (
        <div className="overflow-x-auto">
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
