import React from 'react';

import Modal from '../../components/Modal/Modal';

import './DeleteMovieModal.scss';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';


export default class DeleteMovieModal extends React.Component {
    constructor(props) {
        super(props);

        this.links = props.links;
    }

    render() {
        return (
            <Modal onCloseClick={this.props.onCloseClick}>
                <div className="home-delete-movie">
                    <h1 className="tp-header home-delete-movie__title">DELETE MOVIE</h1>
                    <form className="home-delete-movie-form">
                        <p>Are you sure you want to delete this movie?</p>
                        <div className="home-delete-movie-form__actions">
                            <Button colorType="primary">Confirm</Button>
                        </div>
                    </form>
                </div>
            </Modal>
        );
    }
}