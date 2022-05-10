/* eslint-disable no-unused-vars */
import React from 'react';

function ServiceCard({ service }) {
    const { name, description, img } = service;
    return (
        <div className="card w-96 items-center justify-center bg-base-100 shadow-md">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="card-body text-center">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ServiceCard;
