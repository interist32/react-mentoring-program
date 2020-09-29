import React, { useState } from 'react';

import HeroLayout from '../../layouts/HeroLayout';

import Button from '../../components/Button/Button';

import SearchForm from './SearchForm';
import FilterOptions from './FilterOptions';
import MovieList from '../../components/MovieList/MovieList';
import AddMovieModal from './AddMovieModal';
import EditMovieModal from './EditMovieModal';
import DeleteMovieModal from './DeleteMovieModal';

import './Home.scss';


const movies = [
    {
        title: 'The Big Lebowski',
        genre: 'Comedy',
        releaseDate: 1998,
        image: 'https://www.gstatic.com/tv/thumb/v22vodart/20484/p20484_v_v8_am.jpg',
    },
    {
        title: 'The Matrix',
        genre: 'Sci-fi',
        releaseDate: 1999,
        image: 'https://www.gstatic.com/tv/thumb/v22vodart/22804/p22804_v_v8_as.jpg',
    },
    {
        title: 'The Butterfly Effect',
        genre: 'Thriller',
        releaseDate: 2004,
        image: 'https://www.gstatic.com/tv/thumb/v22vodart/31722/p31722_v_v8_aa.jpg',
    },
    {
        title: 'Donnie Darko',
        genre: 'Sci-fi',
        releaseDate: 2001,
        image: 'https://www.gstatic.com/tv/thumb/v22vodart/27378/p27378_v_v8_av.jpg',
    },
    {
        title: 'Twin Peaks: Fire Walk with Me',
        genre: 'Mystery',
        releaseDate: 1992,
        image: 'https://www.gstatic.com/tv/thumb/v22vodart/13997/p13997_v_v8_aa.jpg',
    },
];


const Home = () => {
    const [addMovieModalOpen, showAddMovieModal] = useState(false);
    const [editMovieModalOpen, showEditMovieModal] = useState(false);
    const [deleteMovieModalOpen, showDeleteMovieModal] = useState(false);

    const headerRight = (
        <Button onClick={() => showAddMovieModal(true)}>+ ADD MOVIE</Button>
    );

    const addMovieModal = (
        addMovieModalOpen ?
            <AddMovieModal onCloseClick={() => showAddMovieModal(false)} /> :
            null
    );

    const editMovieModal = (
        editMovieModalOpen ?
            <EditMovieModal onCloseClick={() => showEditMovieModal(false)} /> :
            null
    );

    const deleteMovieModal = (
        deleteMovieModalOpen ?
            <DeleteMovieModal onCloseClick={() => showDeleteMovieModal(false)} /> :
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
            <FilterOptions />

            <div className="home-result__title">
                <strong>{movies.length}</strong> movies found
            </div>

            <MovieList movies={movies} />

            {addMovieModal}
            {editMovieModal}
            {deleteMovieModal}
        </>
    );

    return (
        <HeroLayout
            headerRight={headerRight}
            hero={hero}
            main={main}
        >
        </HeroLayout>
    );

}

export default Home;