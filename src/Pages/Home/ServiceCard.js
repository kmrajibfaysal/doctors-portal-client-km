/* eslint-disable no-unused-vars */
import React from 'react';

function ServiceCard({ name, description, img }) {
    return (
        <div className="card w-96 items-center justify-center bg-base-100 shadow-md">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="card-body text-center">
                <h2 className="card-title justify-center">Fluoride Treatment</h2>
                <p>
                    Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the
                </p>
            </div>
        </div>
    );
}

export default ServiceCard;
