import {createSelector} from 'reselect';


const moviesState = state => state.movies;

const allMovies = createSelector(moviesState, (state) => state.movies);

export const isLoading =
    createSelector(moviesState, (state) => state.isLoading);

export const error = createSelector(moviesState, (state) => state.error);

export const genres = createSelector(allMovies, (movies) => {
  const set = new Set();

  for (const movie of movies) {
    for (const genre of movie.genres) {
      set.add(genre);
    }
  }
  return [...set];
});

export const filterByGenre =
    createSelector(moviesState, (state) => state.filterByGenre);

export const filteredMovies =
    createSelector(allMovies, filterByGenre, (allMovies, filterByGenre) => {
      if (!filterByGenre) return allMovies;

      return allMovies.filter((movie) => movie.genres.includes(filterByGenre));
    })