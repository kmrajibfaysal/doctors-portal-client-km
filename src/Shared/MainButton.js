import React from 'react';

function MainButton({ title, ExtraClass }) {
    return (
        <button
            type="button"
            className={`btn transform border-0 bg-gradient-to-r from-secondary to-primary uppercase text-white hover:scale-105 ${
                ExtraClass && ExtraClass
            }`}
        >
            {title}
        </button>
    );
}

export default MainButton;
