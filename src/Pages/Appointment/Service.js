/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Service({ service, setTreatment }) {
    const { name, slots } = service;
    return (
        <div className="card max-w-[425px] items-center justify-center bg-base-100 shadow-md">
            <div className="card-body text-center">
                <h2 className="card-title justify-center text-secondary">{name}</h2>
                <p>
                    {slots.length === 0 ? (
                        <span className="text-red-500">Try another date!</span>
                    ) : (
                        slots[0]
                    )}
                </p>
                <p className="text-xs">
                    {slots.length} {slots.length <= 1 ? 'space' : 'spaces'} available
                </p>
                <div>
                    <button onClick={() => setTreatment(service)} type="button">
                        <label
                            htmlFor="booking-modal"
                            className="btn transform border-0 bg-gradient-to-r from-secondary to-primary uppercase text-white hover:scale-105"
                            disabled={!slots.length && true}
                        >
                            book appointment
                        </label>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Service;
