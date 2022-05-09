import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';

const ServiceCard = () => (
    <div className="flex w-full flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-6">
        <div className="card w-96 items-center justify-center bg-base-100 shadow-md">
            <div>
                <img src={fluoride} alt="Shoes" />
            </div>
            <div className="card-body">
                <h2 className="card-title">Fluoride Treatment</h2>
                <p>
                    Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the
                </p>
            </div>
        </div>
        <div className="card w-96 items-center justify-center bg-base-100 shadow-md">
            <div>
                <img src={cavity} alt="Shoes" />
            </div>
            <div className="card-body">
                <h2 className="card-title">Cavity filling</h2>
                <p>
                    Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the
                </p>
            </div>
        </div>
        <div className="card w-96 items-center justify-center bg-base-100 shadow-md">
            <div>
                <img src={whitening} alt="Shoes" />
            </div>
            <div className="card-body">
                <h2 className="card-title">Teeth Whitening</h2>
                <p>
                    Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the
                </p>
            </div>
        </div>
    </div>
);

export default ServiceCard;
