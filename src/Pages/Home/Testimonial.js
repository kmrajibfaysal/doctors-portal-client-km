/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function Testimonial({ patient }) {
    const { name, review, img, place } = patient;
    return (
        <div className="rounded-lg p-4 text-gray-800 shadow-md">
            <div className="mb-2">
                <p className="mb-2 text-center text-gray-600 ">{review}</p>
                <div className="flex flex-col items-center justify-center">
                    <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100">
                        <img
                            src={img}
                            alt="img"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <h5 className="font-bold text-secondary">{name}</h5>
                    <p className="text-sm text-gray-600">{place}</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
