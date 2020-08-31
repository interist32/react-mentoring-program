import React from 'react';

import Modal from '../../components/Modal/Modal';

import './editMovieModal.scss';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';


export default class EditMovieModal extends React.Component {
    constructor(props) {
        super(props);

        this.links = props.links;
    }

    render() {
        return (
            <Modal onCloseClick={this.props.onCloseClick}>
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
}