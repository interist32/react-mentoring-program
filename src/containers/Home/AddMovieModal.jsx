import React from 'react';

import Modal from '../../components/Modal/Modal';

import './AddMovieModal.scss';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';


const AddMovieModal = ({ onCloseClick }) => {
    return (
        <Modal onCloseClick={onCloseClick}>
            <div className="home-add-movie">
                <h1 className="tp-header home-add-movie__title">ADD MOVIE</h1>
                <form className="home-add-movie-form">
                    <label className="home-add-movie-form__label">
                        Title
                            <Input />
                    </label>
                    <label className="home-add-movie-form__label">
                        Release date
                            <Input />
                    </label>
                    <label className="home-add-movie-form__label">
                        Movie URL
                            <Input />
                    </label>
                    <label className="home-add-movie-form__label">
                        Genre
                            <Input />
                    </label>
                    <label className="home-add-movie-form__label">
                        Runtime
                            <Input />
                    </label>
                    <div className="home-add-movie-form__actions">
                        <Button type="reset" colorType="secondary">Reset</Button>
                        <Button colorType="primary">Submit</Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default AddMovieModal;