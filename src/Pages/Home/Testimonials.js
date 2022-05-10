/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Testimonials = () => (
    <div className="container mx-auto min-h-[514px] px-4 py-24">
        <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold text-secondary">Testimonials</h2>
            <p className="text-lg text-gray-600">What others say about us</p>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-2">
            <div className="rounded-lg p-4 text-gray-800 shadow-md">
                <div className="mb-2">
                    <p className="mb-2 text-center text-gray-600 ">
                        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
                        sapiente iusto esse. "
                    </p>
                    <div className="flex flex-col items-center justify-center">
                        <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100">
                            <img
                                src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg"
                                alt="img"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <h5 className="font-bold text-secondary">John Doe</h5>
                        <p className="text-sm text-gray-600">CEO / Founder</p>
                    </div>
                </div>
            </div>
            <div className="rounded-lg p-4 text-gray-800 shadow-md">
                <div className="mb-2">
                    <p className="mb-2 text-center text-gray-600 ">
                        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
                        sapiente iusto esse. "
                    </p>
                    <div className="flex flex-col items-center justify-center">
                        <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100">
                            <img
                                src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
                                alt="img"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <h5 className="font-bold text-secondary">michael james</h5>
                        <p className="text-sm text-gray-600">web developer</p>
                    </div>
                </div>
            </div>
            <div className="rounded-lg p-4 text-gray-800 shadow-md">
                <div className="mb-2">
                    <p className="mb-2 text-center text-gray-600 ">
                        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
                        sapiente iusto esse. "
                    </p>
                    <div className="flex flex-col items-center justify-center">
                        <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100">
                            <img
                                src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
                                alt="img"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <h5 className="font-bold text-secondary">michael james</h5>
                        <p className="text-sm text-gray-600">web developer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Testimonials;
