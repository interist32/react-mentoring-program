import React from 'react';

import './MovieCard.scss';

import PropTypes from 'prop-types';


const Card = ({ id, image, title, genre, releaseDate, onMovieClick }) => (
    <div className="c-movie-card" onClick={() => onMovieClick(id)}>
        <img src={image} className="c-movie-card__image" alt={title} />
        <div className="c-movie-card-details">
            <div className="c-movie-card-details__title">{title}</div>
            <div className="c-movie-card-details__release">{releaseDate}</div>
        </div>
        <div className="c-movie-card__genre">{genre}</div>
    </div>
);

Card.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    onMovieClick: PropTypes.func,
};

export default Card;