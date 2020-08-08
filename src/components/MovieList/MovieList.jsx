import React from 'react';
import Card from '../MovieCard/MovieCard';

import './MovieList.scss';

import PropTypes from 'prop-types';


const MovieList = ({ movies }) => {
    const movieItems = movies.map((props) => (
        <li key={props.title}
            className="c-movie-list__item">
            <Card {...props} />
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
    )
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        releaseDate: PropTypes.number.isRequired,
    }))
};

export default MovieList;