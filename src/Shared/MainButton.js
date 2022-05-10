import React from 'react';

function MainButton({ title }) {
    return (
        <button
            type="button"
            className="btn transform border-0 bg-gradient-to-r from-secondary to-primary uppercase text-white hover:scale-105"
        >
            {title}
        </button>
    );
}

export default MainButton;
