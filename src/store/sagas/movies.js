import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

import {getMovies as getMoviesApi} from '../../data/api';
import * as moviesActions from '../actions/movies';


function* fetchMovies() {
  try {
    const movies = yield getMoviesApi();
    yield put(moviesActions.getMoviesSuccess(movies));
  } catch (error) {
    yield put(moviesActions.getMoviesError(error.message));
  }
}

function* getMovies() {
  yield takeEvery(moviesActions.GET_MOVIES, fetchMovies);
}

export default getMovies;