/* eslint-disable jsx-a11y/label-has-associated-control */
import { format } from 'date-fns';
import React from 'react';

function BookingModal({ treatment, selected }) {
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle relative" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold">{treatment.name}</h3>
                        <button type="button" className="absolute top-2 right-2 ">
                            <label htmlFor="booking-modal">
                                <svg
                                    className=""
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

                    <form className="">
                        <input
                            className="input input-bordered my-3 block w-full  rounded-md"
                            type="text"
                            name=""
                            id=""
                            disabled
                            value={selected && format(selected, 'PP')}
                        />
                        <input
                            className="input input-bordered my-3 w-full "
                            type="text"
                            name=""
                            id=""
                            disabled
                            value={treatment && treatment.slots[0]}
                        />
                        <input
                            className="input input-bordered my-3 w-full "
                            type="text"
                            name=""
                            id=""
                            placeholder="Full Name"
                        />
                        <input
                            className="input input-bordered my-3 w-full "
                            type="text"
                            name=""
                            id=""
                            placeholder="Phone Number"
                        />
                        <input
                            className="input input-bordered my-3 w-full "
                            type="text"
                            name=""
                            id=""
                            placeholder="Email"
                        />
                        <button type="button" className="block w-full rounded-md border-0 ">
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
