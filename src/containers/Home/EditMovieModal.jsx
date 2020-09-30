import React from 'react';

import Modal from '../../components/Modal/Modal';

import './editMovieModal.scss';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';


const EditMovieModal = ({ movieId, onCloseClick }) => {
    return (
        <Modal onCloseClick={onCloseClick}>
            {movieId}
            <div className="home-edit-movie">
                <h1 className="tp-header home-edit-movie__title">EDIT MOVIE</h1>
                <form className="home-edit-movie-form">
                    <label className="home-edit-movie-form__label">
                        Title
                            <Input />
                    </label>
                    <label className="home-edit-movie-form__label">
                        Release date
                            <Input />
                    </label>
                    <label className="home-edit-movie-form__label">
                        Movie URL
                            <Input />
                    </label>
                    <label className="home-edit-movie-form__label">
                        Genre
                            <Input />
                    </label>
                    <label className="home-edit-movie-form__label">
                        Runtime
                            <Input />
                    </label>
                    <div className="home-edit-movie-form__actions">
                        <Button type="reset" colorType="secondary">Reset</Button>
                        <Button colorType="primary">Save</Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default EditMovieModal;