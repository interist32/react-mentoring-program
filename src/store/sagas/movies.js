import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

import {addMovie as addMovieApi, deleteMovie as deleteMovieApi, getMovies as getMoviesApi, updateMovie as updateMovieApi} from '../../data/api';
import * as moviesActions from '../actions/movies';


function* fetchMovies() {
  try {
    const movies = yield getMoviesApi();
    yield put(moviesActions.getMoviesSuccess(movies));
  } catch (error) {
    yield put(moviesActions.getMoviesError(error.message));
  }
}

export function* getMovies() {
  yield takeEvery(moviesActions.GET_MOVIES, fetchMovies);
}

function* createMovie({movie}) {
  try {
    const newMovie = yield addMovieApi(movie);
    yield put(moviesActions.addMovieSuccess(newMovie));
  } catch (error) {
    yield put(moviesActions.addMovieError(error));
  }
}

export function* addMovie() {
  yield takeEvery(moviesActions.ADD_MOVIE, createMovie);
}

function* updateMovie({movie}) {
  try {
    const updateResult = yield updateMovieApi(movie);
    yield put(moviesActions.updateMovieSuccess(updateResult));
  } catch (error) {
    yield put(moviesActions.updateMovieError(error));
  }
}

export function* editMovie() {
  yield takeEvery(moviesActions.UPDATE_MOVIE, updateMovie);
}

function* deleteMovie({movieId}) {
  try {
    yield deleteMovieApi(movieId);
    yield put(moviesActions.deleteMovieSuccess(movieId));
  } catch (error) {
    yield put(moviesActions.deleteMovieError(error));
  }
}

export function* removeMovie() {
  yield takeEvery(moviesActions.DELETE_MOVIE, deleteMovie);
}