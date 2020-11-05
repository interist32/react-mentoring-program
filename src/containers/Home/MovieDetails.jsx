import React from 'react';

import { Movie } from '../../propTypes';
import { connect } from 'react-redux';
import * as moviesSelectors from '../../store/selectors/movies';
import { useRouter } from 'next/router';


const MovieDetails = ({ selectMovie }) => {
    const router = useRouter();
    const movieId = router.query.id;
    const { posterPath, title, genres, releaseDate, overview, tagline } = selectMovie(movieId);

    return (
        <>
            <div className="home-movie-details">
                <div className="home-movie-details__image">
                    <img src={posterPath} alt={title} />
                </div>
                <div className="home-movie-details__details">
                    <h1 className="tp-header">{title}</h1>
                    <div className="home-movie-details__genre">{tagline}</div>
                    <div className="home-movie-details__genre">{genres.join(', ')}</div>
                    <div className="home-movie-details__release">{releaseDate}</div>
                    <div className="home-movie-details__description">{overview}</div>
                </div>
            </div>
        </>
    );
};

MovieDetails.propTypes = {
    movie: Movie,
};

const mapStateToProps = (state, props) => {
    return {
        selectMovie: (movieId) => moviesSelectors.selectedMovie(state, movieId),
    };
}

export default connect(
    mapStateToProps,
)(MovieDetails);