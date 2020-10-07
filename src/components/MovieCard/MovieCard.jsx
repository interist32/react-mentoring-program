import React, { useState } from 'react';

import './MovieCard.scss';

import PropTypes from 'prop-types';
import { Movie } from '../../propTypes';


const Card = ({
    movie,
    onMovieEditClick,
    onMovieDeleteClick,
}) => {
    const [optionsOpen, setOptionsOpen] = useState(false);
    const { id, posterPath, title, genres, releaseDate } = movie;

    const handleEditOptionsButtonClick = (event) => {
        event.stopPropagation();
        setOptionsOpen(true);
    };

    const editOptionsButton = (
        <div onClick={handleEditOptionsButtonClick} className="c-movie-card__options-button">
            <button>&middot;&middot;&middot;</button>
        </div>
    );

    const handleOptionsClick = (event, option) => {
        event.stopPropagation();
        setOptionsOpen(false);

        switch (option) {
            case 'edit':
                onMovieEditClick(movie.id);
                break;
            case 'delete':
                onMovieDeleteClick(movie.id);
                break;
            default:
                throw new Error('Not supported type');
        }
    };

    const editOptionsList = (
        <div className="c-movie-card-options">
            <div onClick={() => setOptionsOpen(false)} className="c-movie-card-options__cross">✖</div>
            <ul className="c-movie-card-options-list">
                <li onClick={(event) => handleOptionsClick(event, 'edit')}>Edit</li>
                <li onClick={(event) => handleOptionsClick(event, 'delete')}>Delete</li>
            </ul>
        </div>
    );

    const editOptions = (
        optionsOpen ? editOptionsList : editOptionsButton
    );

    return (
        <div className="c-movie-card">
            {editOptions}
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
    movie: Movie.isRequired,
    onMovieEditClick: PropTypes.func.isRequired,
    onMovieDeleteClick: PropTypes.func.isRequired,
};

export default Card;