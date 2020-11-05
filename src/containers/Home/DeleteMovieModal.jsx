import React from 'react';

import Modal from '../../components/Modal/Modal';
import { connect } from 'react-redux';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import * as moviesActions from '../../store/actions/movies';
import * as moviesSelectors from '../../store/selectors/movies';


const DeleteMovieModal = ({
    movieId,
    onCloseClick,
    dispatchDeleteMovie,
}) => {
    const handleOnConfirm = () => {
        dispatchDeleteMovie(movieId);
        onCloseClick();
    };

    return (
        <Modal onCloseClick={onCloseClick}>
            <div className="home-delete-movie">
                <h1 className="tp-header home-delete-movie__title">DELETE MOVIE</h1>
                <form className="home-delete-movie-form">
                    <p>Are you sure you want to delete this movie?</p>
                    <div className="home-delete-movie-form__actions">
                        <Button
                            onClick={handleOnConfirm}
                            colorType="primary">Confirm</Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    dispatchDeleteMovie: moviesActions.deleteMovie,
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteMovieModal);