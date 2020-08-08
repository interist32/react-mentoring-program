import React from 'react';

import './MovieCard.scss';

import PropTypes from 'prop-types';


const Card = ({ image, title, genre, releaseDate }) => (
    <div className="c-movie-card">
        <img src={image} className="c-movie-card__image" alt={title} />
        <div className="c-movie-card-details">
            <div className="c-movie-card-details__title">{title}</div>
            <div className="c-movie-card-details__release">{releaseDate}</div>
        </div>
        <div className="c-movie-card__genre">{genre}</div>
    </div>
);

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
};

export default Card;