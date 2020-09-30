import {createSelector} from 'reselect';


const moviesState = state => state.movies;

export const movies = createSelector(moviesState, (state) => state.movies);
export const isLoading =
    createSelector(moviesState, (state) => state.isLoading);
export const error = createSelector(moviesState, (state) => state.error);
export const genres = createSelector(movies, (movies) => {
  const set = new Set();

  for (const movie of movies) {
    for (const genre of movie.genres) {
      set.add(genre);
    }
  }
  return [...set];
});