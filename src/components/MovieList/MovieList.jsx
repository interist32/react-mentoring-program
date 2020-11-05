import React from 'react';
import Card from '../MovieCard/MovieCard';
import { Link } from 'next/link';

import PropTypes from 'prop-types';
import { Movie } from '../../propTypes';


const MovieList = ({
    movies,
    onMovieEditClick,
    onMovieDeleteClick,
}) => {

    const movieItems = movies.map((movie) => (
        <li key={movie.title}
            className="c-movie-list__item">
            <Link href={`/film/${movie.id}`} className="c-movie-list__link">
                <Card movie={movie}
                    onMovieEditClick={onMovieEditClick}
                    onMovieDeleteClick={onMovieDeleteClick}
                />
            </Link>
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
    onMovieEditClick: PropTypes.func.isRequired,
    onMovieDeleteClick: PropTypes.func.isRequired,
};

export default MovieList;