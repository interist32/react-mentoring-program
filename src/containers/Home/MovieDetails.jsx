import React from 'react';

import PropTypes from 'prop-types';

import './MovieDetails.scss';


const MovieDetails = ({ movie }) => {
    const { image, title, genre, releaseDate, description } = movie;
    return (
        <>
            <div className="home-movie-details">
                <div className="home-movie-details__image">
                    <img src={image} alt={title} />
                </div>
                <div className="home-movie-details__details">
                    <h1 className="tp-header">{title}</h1>
                    <div className="home-movie-details__genre">{genre}</div>
                    <div className="home-movie-details__release">{releaseDate}</div>
                    <div className="home-movie-details__description">{description}</div>
                </div>
            </div>
        </>
    );
};

export default MovieDetails;