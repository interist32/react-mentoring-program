import React from 'react';
import Logo from '../../components/Logo/Logo';
import Header from '../../components/Header/Header';
import ButtonLink from '../../components/ButtonLink/ButtonLink';

import SearchForm from './SearchForm';
import FilterOptions from './FilterOptions';
import MovieList from './MovieList';
import Footer from './Footer';

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
    return (
        <div className="home">
            <div className="hero">
                <div className="cm-container">
                    <Header>
                        <ButtonLink href='#'>+ ADD MOVIE</ButtonLink>
                    </Header>

                    <h1 className="hero__title">FIND YOUR MOVIE</h1>

                    <section className="search">
                        <SearchForm />
                    </section>
                </div>
            </div>

            <main className="result cm-container">
                <FilterOptions />

                <div className="result__title">
                    <strong>{movies.length}</strong> movies found
                </div>

                <MovieList movies={movies} />
            </main>

            <Footer />
        </div>)
};

export default Home;