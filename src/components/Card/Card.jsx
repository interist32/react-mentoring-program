import React from 'react';

import './Card.scss';

import PropTypes from 'prop-types';


const Card = ({ image, title, genre, releaseDate }) => (
    <div className="card">
        <img src={image} className="card__image" alt={title} />
        <div className="movie">
            <div className="movie__title">{title}</div>
            <div className="movie__release">{releaseDate}</div>
        </div>
        <div className="card__genre">{genre}</div>
    </div>
);

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
};

export default Card;