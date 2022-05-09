import React from 'react';

const InfoCards = () => (
    <div className="container mx-auto flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-5">
        <div className="card w-80 bg-base-100 shadow-xl md:w-96">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl md:w-96">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl md:w-96">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    </div>
);

export default InfoCards;
