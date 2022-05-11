import React from 'react';

function Service({ service }) {
    const { name, slots } = service;
    return (
        <div className="card max-w-[425px] items-center justify-center bg-base-100 shadow-md">
            <div className="card-body text-center">
                <h2 className="card-title justify-center text-secondary">{name}</h2>
                <p className="text-xs">
                    {slots.length} {slots.length <= 1 ? 'space' : 'spaces'} available
                </p>
                <div>
                    <button
                        disabled={!slots.length && true}
                        type="button"
                        className={`btn transform border-0 bg-gradient-to-r from-secondary to-primary uppercase text-white hover:scale-105 `}
                    >
                        Book appointment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Service;
