import React from 'react';

import './MovieCard.scss';

import PropTypes from 'prop-types';
import { Movie } from '../../propTypes';


const Card = ({ movie, onMovieClick }) => {
    const { id, posterPath, title, genres, releaseDate } = movie;
    return (
        <div className="c-movie-card" onClick={() => onMovieClick(id)}>
            <img src={posterPath} className="c-movie-card__image" alt={title} />
            <div className="c-movie-card-details">
                <div className="c-movie-card-details__title">{title}</div>
                <div className="c-movie-card-details__release">{releaseDate}</div>
            </div>
            <div className="c-movie-card__genre">{genres.join(', ')}</div>
        </div>
    );
};

Card.propTypes = {
    movie: Movie,
    onMovieClick: PropTypes.func,
};

export default Card;