import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import HeroLayout from '../../layouts/HeroLayout';

import Button from '../../components/Button/Button';

import SearchForm from './SearchForm';
import FilterOptions from './FilterOptions';
import MovieList from '../../components/MovieList/MovieList';
import AddMovieModal from './AddMovieModal';
import EditMovieModal from './EditMovieModal';
import DeleteMovieModal from './DeleteMovieModal';
import MovieDetails from './MovieDetails';
import * as moviesActions from '../../store/actions/movies';
import * as moviesSelectors from '../../store/selectors/movies';

import useModalState from '../../hooks/useModalState';

import './Home.scss';


const Home = ({
    movies,
    isLoading,
    error,
    dispatchGetMovies,
    selectedMovie,
    dispatchSetSelectedMovie,
}) => {
    const [addMovieModalOpen, showAddMovideModal, closeAddMovideModal] = useModalState();
    const [movieIdToEdit, setMovieIdToEdit] = useState(null);
    const [editMovieModalOpen, showEditMovideModal, closeEditMovideModal] = useModalState();
    const [movieIdToDelete, setMovieIdToDelete] = useState(null);
    const [deleteMovieModalOpen, showDeleteMovideModal, closeDeleteMovideModal] = useModalState();

    useEffect(() => {
        dispatchGetMovies();
    }, []);

    const headerRight = (
        <Button onClick={() => showAddMovideModal()}>+ ADD MOVIE</Button>
    );

    const addMovieModal = (
        addMovieModalOpen ?
            <AddMovieModal
                onCloseClick={() => closeAddMovideModal()} /> :
            null
    );

    const editMovieModal = (
        editMovieModalOpen && movieIdToEdit ?
            <EditMovieModal
                movieId={movieIdToEdit}
                onCloseClick={() => closeEditMovideModal()} /> :
            null
    );

    const deleteMovieModal = (
        deleteMovieModalOpen && movieIdToDelete ?
            <DeleteMovieModal
                movieId={movieIdToDelete}
                onCloseClick={() => closeDeleteMovideModal()} /> :
            null
    );

    const handleMovieClick = (movieId) => {
        dispatchSetSelectedMovie(movieId);
        window.scrollTo(0, 0);
    };

    const handleMovieEditClick = (movieId) => {
        setMovieIdToEdit(movieId);
        showEditMovideModal();
    };

    const handleMovieDeleteClick = (movieId) => {
        setMovieIdToDelete(movieId);
        showDeleteMovideModal();
    };

    const hero = (
        <>
            <h1 className="tp-header home__title">FIND YOUR MOVIE</h1>

            <section className="home__search">
                <SearchForm />
            </section>
        </>
    );

    const main = (
        <>
            <FilterOptions />

            <div className="home-result__title">
                <strong>{movies.length}</strong> movies found
            </div>

            <MovieList movies={movies}
                onMovieClick={handleMovieClick}
                onMovieEditClick={handleMovieEditClick}
                onMovieDeleteClick={handleMovieDeleteClick}
            />

            {addMovieModal}
            {editMovieModal}
            {deleteMovieModal}
        </>
    );

    return (
        <HeroLayout
            headerRight={headerRight}
            hero={selectedMovie ? <MovieDetails movie={selectedMovie} /> : hero}
            main={main}
        >
        </HeroLayout>
    );

}

const mapStateToProps = (state) => {
    return {
        movies: moviesSelectors.filteredMovies(state),
        isLoading: moviesSelectors.isLoading(state),
        error: moviesSelectors.error(state),
        selectedMovie: moviesSelectors.selectedMovie(state),
    }
}

const mapDispatchToProps = {
    dispatchGetMovies: moviesActions.getMovies,
    dispatchSetSelectedMovie: moviesActions.setSelectedMovie,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);