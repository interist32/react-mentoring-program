import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';

import Modal from '../../components/Modal/Modal';

import './editMovieModal.scss';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import * as moviesActions from '../../store/actions/movies';
import * as moviesSelectors from '../../store/selectors/movies';


const EditMovieModal = ({
    movies,
    movieId,
    onCloseClick,
    dispatchUpdateMovie,
}) => {
    const findMovie = useCallback((movieId) => movies.find(movie => movie.id === movieId), [movies, movieId]);

    const [movieData, setMovieData] = useState(findMovie(movieId));

    const handleInputOnChange = (type, value) => {
        setMovieData({
            ...movieData,
            [type]: value,
        });
    };

    const { id, title, releaseDate, posterPath, genres, runtime } = movieData;

    const handleOnSaveClick = (event) => {
        event.preventDefault();
        dispatchUpdateMovie(movieData);
        onCloseClick();
    };

    return (
        <Modal onCloseClick={onCloseClick}>
            <div className="home-edit-movie">
                <h1 className="tp-header home-edit-movie__title">EDIT MOVIE</h1>
                <form className="home-edit-movie-form">
                    <label className="home-edit-movie-form__label">
                        ID
                        <Input
                            value={id}
                            onChange={(value) => handleInputOnChange('id', value)}
                        />
                    </label>
                    <label className="home-edit-movie-form__label">
                        Title
                        <Input
                            value={title}
                            onChange={(value) => handleInputOnChange('title', value)}
                        />
                    </label>
                    <label className="home-edit-movie-form__label">
                        Release date
                        <Input
                            value={releaseDate}
                            onChange={(value) => handleInputOnChange('releaseDate', value)}
                        />
                    </label>
                    <label className="home-edit-movie-form__label">
                        Movie Image URL
                        <Input
                            value={posterPath}
                            onChange={(value) => handleInputOnChange('posterPath', value)}
                        />
                    </label>
                    <label className="home-edit-movie-form__label">
                        Genres
                        <Input
                            value={genres.join(', ')}
                            onChange={(value) => handleInputOnChange('genres', value.split(', '))}
                        />
                    </label>
                    <label className="home-edit-movie-form__label">
                        Runtime
                        <Input
                            value={runtime}
                            onChange={(value) => handleInputOnChange('runtime', value)}
                        />
                    </label>
                    <div className="home-edit-movie-form__actions">
                        <Button type="reset" colorType="secondary">Reset</Button>
                        <Button onClick={handleOnSaveClick} colorType="primary">Save</Button>
                    </div>
                </form>
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