/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

function DoctorRow({ doctor, index, refetch, setDeletingDoctor }) {
    const { name, specialty, img, email } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-8 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="delete-confirm-modal"
                    className="btn btn-error btn-xs"
                >
                    Delete
                </label>
            </td>
        </tr>
    );
}

export default DoctorRow;
