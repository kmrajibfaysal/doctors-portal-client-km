/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */

/* eslint-disable jsx-a11y/label-has-associated-control */
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

function BookingModal({ treatment, setTreatment, selected, refetch }) {
    const { name, _id, slots } = treatment;
    const [user] = useAuthState(auth);
    const formattedDate = format(selected, 'PP');

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.time.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,
        };

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot}`);
                    refetch();
                } else {
                    toast.error(
                        `You already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`
                    );
                }
            });
    };

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle relative" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-secondary">
                            Booking for: {treatment.name}
                        </h3>
                        <button type="button" className="absolute top-2 right-2 ">
                            <label htmlFor="booking-modal">
                                <svg
                                    className="cursor-pointer"
                                    version="1.1"
                                    id="Layer_1"
                                    x="0px"
                                    y="0px"
                                    width="25px"
                                    height="25px"
                                    viewBox="0 0 122.881 122.88"
                                    enableBackground="new 0 0 122.881 122.88"
                                    xmlSpace="preserve"
                                    fill="#3A4255"
                                >
                                    <g>
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M61.44,0c33.933,0,61.441,27.507,61.441,61.439 c0,33.933-27.508,61.44-61.441,61.44C27.508,122.88,0,95.372,0,61.439C0,27.507,27.508,0,61.44,0L61.44,0z M81.719,36.226 c1.363-1.363,3.572-1.363,4.936,0c1.363,1.363,1.363,3.573,0,4.936L66.375,61.439l20.279,20.278c1.363,1.363,1.363,3.573,0,4.937 c-1.363,1.362-3.572,1.362-4.936,0L61.44,66.376L41.162,86.654c-1.362,1.362-3.573,1.362-4.936,0c-1.363-1.363-1.363-3.573,0-4.937 l20.278-20.278L36.226,41.162c-1.363-1.363-1.363-3.573,0-4.936c1.363-1.363,3.573-1.363,4.936,0L61.44,56.504L81.719,36.226 L81.719,36.226z"
                                        />
                                    </g>
                                </svg>
                            </label>
                        </button>
                    </div>

                    <form onSubmit={handleBooking}>
                        <input
                            className="input input-bordered my-3 block w-full  rounded-md"
                            type="text"
                            name="date"
                            id="treatment-name"
                            disabled
                            defaultValue={selected ? format(selected, 'PP') : ''}
                        />
                        <select
                            name="time"
                            className="select select-bordered my-3 w-full"
                            defaultValue={treatment ? treatment.slots[0] : ''}
                        >
                            <option>{treatment ? treatment.slots[0] : ''}</option>
                            {treatment.slots.slice(1).map((slot, index) => (
                                <option key={index}>{slot}</option>
                            ))}
                        </select>
                        <input
                            className="input input-bordered my-3 w-full "
                            type="text"
                            name="name"
                            id=""
                            placeholder="Full Name"
                            defaultValue={user?.displayName}
                            disabled
                        />

                        <input
                            className="input input-bordered my-3 w-full "
                            type="text"
                            name="email"
                            id=""
                            placeholder="Email"
                            defaultValue={user?.email}
                            disabled
                        />
                        <input
                            className="input input-bordered my-3 w-full "
                            type="text"
                            name="phone"
                            id=""
                            placeholder="Phone Number"
                        />
                        <button type="submit" className="block w-full rounded-md border-0 ">
                            <label
                                htmlFor="booking-modal"
                                className="btn w-full border-0 bg-accent uppercase text-white"
                            >
                                Submit
                            </label>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BookingModal;
