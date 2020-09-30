import React, { useState, useEffect, useCallback } from 'react';

import HeroLayout from '../../layouts/HeroLayout';

import Button from '../../components/Button/Button';

import SearchForm from './SearchForm';
import FilterOptions from './FilterOptions';
import MovieList from '../../components/MovieList/MovieList';
import AddMovieModal from './AddMovieModal';
import EditMovieModal from './EditMovieModal';
import DeleteMovieModal from './DeleteMovieModal';
import MovieDetails from './MovieDetails';

import useModalState from '../../hooks/useModalState';
import { getMovies } from '../../data/api';

import './Home.scss';


const Home = () => {
    const [addMovieModalOpen, showAddMovideModal, closeAddMovideModal] = useModalState();
    const [editMovieModalOpen, showEditMovideModal, closeEditMovideModal] = useModalState();
    const [deleteMovieModalOpen, showDeleteMovideModal, closeDeleteMovideModal] = useModalState();
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedMovieId, setSelectedMovieId] = useState(null);

    const getSelectedMovie = useCallback(() => {
        return movies.find(movie => movie.id === selectedMovieId);
    }, [movies, selectedMovieId]);

    const selectedMovie = getSelectedMovie();

    useEffect(() => {
        getMovies().then((movies) => {
            setMovies(movies);
            setGenres(getGenres(movies));
        });
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

function getGenres(movies) {
    const set = new Set();
    for (const movie of movies) {
        for (const genre of movie.genres) {
            set.add(genre);
        }
    }
    return [...set];
}

export default Home;