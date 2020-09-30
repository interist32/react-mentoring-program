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


const Home = ({ movies, genres, isLoading, error, dispatchGetMovies, }) => {
    const [addMovieModalOpen, showAddMovideModal, closeAddMovideModal] = useModalState();
    const [editMovieModalOpen, showEditMovideModal, closeEditMovideModal] = useModalState();
    const [deleteMovieModalOpen, showDeleteMovideModal, closeDeleteMovideModal] = useModalState();
    const [selectedMovieId, setSelectedMovieId] = useState(null);

    const getSelectedMovie = useCallback(() => {
        return null;
        // return movies.find(movie => movie.id === selectedMovieId);
    }, [movies, selectedMovieId]);

    const selectedMovie = getSelectedMovie();

    useEffect(() => {
        dispatchGetMovies();
    }, []);

    const headerRight = (
        <Button onClick={() => showAddMovideModal()}>+ ADD MOVIE</Button>
    );

    const addMovieModal = (
        addMovieModalOpen ?
            <AddMovieModal onCloseClick={() => closeAddMovideModal()} /> :
            null
    );

    const editMovieModal = (
        editMovieModalOpen ?
            <EditMovieModal onCloseClick={() => closeEditMovideModal()} /> :
            null
    );

    const deleteMovieModal = (
        deleteMovieModalOpen ?
            <DeleteMovieModal onCloseClick={() => closeDeleteMovideModal()} /> :
            null
    );

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
            <FilterOptions genres={genres} />

            <div className="home-result__title">
                <strong>{movies.length}</strong> movies found
            </div>

            <MovieList movies={movies} onMovieClick={setSelectedMovieId} />

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
        movies: moviesSelectors.movies(state),
        genres: moviesSelectors.genres(state),
        isLoading: moviesSelectors.isLoading(state),
        error: moviesSelectors.error(state),
    }
}

const mapDispatchToProps = {
    dispatchGetMovies: moviesActions.getMovies,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);