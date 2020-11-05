import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';

import Modal from '../../components/Modal/Modal';

import * as moviesActions from '../../store/actions/movies';
import * as moviesSelectors from '../../store/selectors/movies';
import MovieForm from './MovieForm';


const EditMovieModal = ({
    movies,
    movieId,
    onCloseClick,
    dispatchUpdateMovie,
}) => {
    const findMovie = useCallback((movieId) => movies.find(movie => movie.id === movieId), [movies, movieId]);

    const handleSubmit = (movie) => {
        dispatchUpdateMovie(movie);
        onCloseClick();
    };

    return (
        <Modal onCloseClick={onCloseClick}>
            <div className="home-edit-movie">
                <h1 className="tp-header home-edit-movie__title">EDIT MOVIE</h1>
                <MovieForm movie={findMovie(movieId)} onSubmit={handleSubmit} />
            </div>
        </Modal>
    );
}

const mapStateToProps = (state) => {
    return {
        movies: moviesSelectors.filteredMovies(state),
    }
}

const mapDispatchToProps = {
    dispatchUpdateMovie: moviesActions.updateMovie,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditMovieModal);