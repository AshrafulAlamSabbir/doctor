import React from 'react';

const Info = ({ card }) => {
    const { name, icon, description, bgClass } = card;

    return (
        <div className={`card p-4 text-white md:card-side shadow-xl ${bgClass}`}>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default Info;