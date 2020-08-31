import React from 'react';

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


const HOME_MODAL = {
    ADD_MOVIE: 'addMovieModal',
    EDIT_MOVIE: 'editMovieModal',
    DELETE_MOVIE: 'deleteMovieModal',
};


export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            [HOME_MODAL.ADD_MOVIE]: false,
            [HOME_MODAL.EDIT_MOVIE]: false,
            [HOME_MODAL.DELETE_MOVIE]: false,
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(modalType) {
        this.setState({
            [modalType]: true,
        });
    }

    closeModal(modalType) {
        this.setState({
            [modalType]: false,
        });
    }

    componentDidMount() {
        console.log('Component did mount!');
    }

    render() {
        const headerRight = (
            <Button onClick={this.openModal.bind(this, HOME_MODAL.ADD_MOVIE)}>+ ADD MOVIE</Button>
        );

        const addMovieModalOpen = this.state[HOME_MODAL.ADD_MOVIE];
        const editMovieModalOpen = this.state[HOME_MODAL.EDIT_MOVIE];
        const deleteMovieModalOpen = this.state[HOME_MODAL.DELETE_MOVIE];

        const addMovieModal = (
            addMovieModalOpen ?
                <AddMovieModal onCloseClick={this.closeModal.bind(this, HOME_MODAL.ADD_MOVIE)} /> :
                null
        );

        const editMovieModal = (
            editMovieModalOpen ?
                <EditMovieModal onCloseClick={this.closeModal.bind(this, HOME_MODAL.EDIT_MOVIE)} /> :
                null
        );

        const deleteMovieModal = (
            deleteMovieModalOpen ?
                <DeleteMovieModal onCloseClick={this.closeModal.bind(this, HOME_MODAL.DELETE_MOVIE)} /> :
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
}