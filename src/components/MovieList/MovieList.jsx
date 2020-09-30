import React from 'react';
import Card from '../MovieCard/MovieCard';

import './MovieList.scss';

import PropTypes from 'prop-types';
import { Movie } from '../../propTypes';


const MovieList = ({ movies, onMovieClick }) => {
    const movieItems = movies.map((movie) => (
        <li key={movie.title}
            className="c-movie-list__item">
            <Card movie={movie} onMovieClick={onMovieClick} />
        </li>
    ));

    const movieList = (
        <ul className="c-movie-list">
            {movieItems}
        </ul>);

    const noMovies = (
        <div className="c-movie-list__empty">No Movie Found</div>
    );

    return (
        movies.length ? movieList : noMovies
    );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(Movie),
};

export default MovieList;