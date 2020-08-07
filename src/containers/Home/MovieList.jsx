import React from 'react';
import Card from '../../components/Card/Card';

import './MovieList.scss';

import PropTypes from 'prop-types';


const MovieList = ({ movies }) => {
    const cardsList = movies.map((props) => (
        <li key={props.title}
            className="movie-list__item">
            <Card {...props} />
        </li>
    ));
    return (
        <ul className="movie-list">
            {cardsList}
        </ul>
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