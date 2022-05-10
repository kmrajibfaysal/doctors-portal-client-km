/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Contact = () => (
    <div className=" bg-blueBg py-6">
        <form className="container mx-auto w-full max-w-lg px-4">
            <div className="-mx-3 mb-6 flex flex-wrap">
                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                    <label
                        className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
                        htmlFor="grid-first-name"
                    >
                        First Name
                    </label>
                    <input
                        className="mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                        id="grid-first-name"
                        type="text"
                        placeholder="Jane"
                    />
                    <p className="text-xs italic text-red-500">Please fill out this field.</p>
                </div>
                <div className="w-full px-3 md:w-1/2">
                    <label
                        className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
                        htmlFor="grid-last-name"
                    >
                        Last Name
                    </label>
                    <input
                        className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                        id="grid-last-name"
                        type="text"
                        placeholder="Doe"
                    />
                </div>
            </div>
            <div className="-mx-3 mb-6 flex flex-wrap">
                <div className="w-full px-3">
                    <label
                        className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
                        htmlFor="grid-password"
                    >
                        E-mail
                    </label>
                    <input
                        className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                        id="email"
                        type="email"
                    />
                    <p className="text-xs italic text-gray-600">Some tips - as long as needed</p>
                </div>
            </div>
            <div className="-mx-3 mb-6 flex flex-wrap">
                <div className="w-full px-3">
                    <label
                        className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
                        htmlFor="grid-password"
                    >
                        Message
                    </label>
                    <textarea
                        className="no-resize mb-3 block h-48 w-full resize-none appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                        id="message"
                    />
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="flex w-full items-center justify-center">
                    <button
                        className="focus:shadow-outline rounded bg-teal-400 py-2 px-4 font-bold text-white shadow hover:bg-teal-400 focus:outline-none"
                        type="button"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    </div>
);

export default Contact;
