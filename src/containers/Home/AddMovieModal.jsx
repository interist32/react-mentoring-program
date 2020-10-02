import React, { useState } from 'react';
import { connect } from 'react-redux';

import Modal from '../../components/Modal/Modal';

import './AddMovieModal.scss';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import * as moviesActions from '../../store/actions/movies';
import * as moviesSelectors from '../../store/selectors/movies';


const AddMovieModal = ({
    onCloseClick,
    dispatchAddMovie,
}) => {
    const [newMovieData, setNewMovieData] = useState({});

    const handleInputOnChange = (type, value) => {
        if (type === 'runtime') {
            value = Number(value);
        }
        setNewMovieData({
            ...newMovieData,
            [type]: value,
        });
    };

    const handleOnSaveClick = (event) => {
        event.preventDefault();
        dispatchAddMovie(newMovieData);
        onCloseClick();
    };

    const { title, overview, releaseDate, posterPath, genres, runtime } = newMovieData;

    return (
        <Modal onCloseClick={onCloseClick}>
            <div className="home-add-movie">
                <h1 className="tp-header home-add-movie__title">ADD MOVIE</h1>
                <form className="home-add-movie-form">
                    <label className="home-add-movie-form__label">
                        Title
                        <Input
                            value={title}
                            onChange={(value) => handleInputOnChange('title', value)}
                        />
                    </label>
                    <label className="home-add-movie-form__label">
                        Overview
                        <Input
                            value={overview}
                            onChange={(value) => handleInputOnChange('overview', value)}
                        />
                    </label>
                    <label className="home-add-movie-form__label">
                        Release date
                        <Input
                            value={releaseDate}
                            onChange={(value) => handleInputOnChange('releaseDate', value)}
                        />
                    </label>
                    <label className="home-add-movie-form__label">
                        Movie Image URL
                        <Input
                            value={posterPath}
                            onChange={(value) => handleInputOnChange('posterPath', value)}
                        />
                    </label>
                    <label className="home-add-movie-form__label">
                        Genres
                        <Input
                            value={(genres || []).join(', ')}
                            onChange={(value) => handleInputOnChange('genres', value.split(', '))}
                        />
                    </label>
                    <label className="home-add-movie-form__label">
                        Runtime
                        <Input
                            value={runtime}
                            onChange={(value) => handleInputOnChange('runtime', value)}
                        />
                    </label>
                    <div className="home-add-movie-form__actions">
                        <Button type="reset" colorType="secondary">Reset</Button>
                        <Button
                            onClick={handleOnSaveClick}
                            colorType="primary">Submit</Button>
                    </div>
                </form>
            </div>
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