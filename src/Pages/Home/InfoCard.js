import React from 'react';

function InfoCards({ info }) {
    const { title, description, img, bgClass } = info;
    return (
        <div
            className={`card w-80 items-center justify-around ${bgClass} py-4  text-white shadow-xl md:w-96 md:flex-row md:py-1 md:px-5`}
        >
            <div>
                <img src={img} alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default InfoCards;
