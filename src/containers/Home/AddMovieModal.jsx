import React, { useState } from 'react';
import { connect } from 'react-redux';

import Modal from '../../components/Modal/Modal';

import MovieForm from './MovieForm';
import * as moviesActions from '../../store/actions/movies';
import * as moviesSelectors from '../../store/selectors/movies';


export const AddMovieModal = ({
    onCloseClick,
    dispatchAddMovie,
}) => {
    const handleSubmit = (movie) => {
        dispatchAddMovie(movie);
        onCloseClick();
    };

    return (
        <Modal onCloseClick={onCloseClick}>
            <h1 className="tp-header home-edit-movie__title">ADD MOVIE</h1>
            <MovieForm onSubmit={handleSubmit} />
        </Modal>
    );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    dispatchAddMovie: moviesActions.addMovie,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddMovieModal);