import React from 'react';

import { Movie } from '../../propTypes';

import './MovieDetails.scss';


const MovieDetails = ({ movie }) => {
    const { posterPath, title, genres, releaseDate, overview, tagline } = movie;
    return (
        <>
            <div className="home-movie-details">
                <div className="home-movie-details__image">
                    <img src={posterPath} alt={title} />
                </div>
                <div className="home-movie-details__details">
                    <h1 className="tp-header">{title}</h1>
                    <div className="home-movie-details__genre">{tagline}</div>
                    <div className="home-movie-details__genre">{genres.join(', ')}</div>
                    <div className="home-movie-details__release">{releaseDate}</div>
                    <div className="home-movie-details__description">{overview}</div>
                </div>
            </div>
        </>
    );
};

MovieDetails.propTypes = {
    movie: Movie,
};

export default MovieDetails;