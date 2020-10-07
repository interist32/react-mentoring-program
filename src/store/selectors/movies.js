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

const selectedMovieId = (state, movieId) => movieId;

export const selectedMovie =
    createSelector(allMovies, selectedMovieId, (allMovies, selectedMovieId) => {
      if (!selectedMovieId) return null;

      return allMovies.find(movie => movie.id == selectedMovieId);
    });

export const filterByGenre =
    createSelector(moviesState, (state) => state.filterByGenre);

export const sortBy = createSelector(moviesState, (state) => state.sortBy);

export const filteredMovies = createSelector(
    allMovies, filterByGenre, sortBy, (allMovies, filterByGenre, sortBy) => {
      const sortPredicate = getSortPredicate(sortBy);

      return (!filterByGenre ?
                  allMovies :
                  allMovies.filter(
                      (movie) => movie.genres.includes(filterByGenre)))
          .sort(sortPredicate)
          .slice();
    });

function getSortPredicate(sortBy) {
  if (sortBy === 'rating') {
    return (a, b) => a.voteAverage - b.voteAverage;
  }
  if (sortBy === 'release date') {
    return (a, b) => {
      return new Date(a.releaseDate).getTime() -
          new Date(b.releaseDate).getTime()
    };
  }
  return (a, b) => a.genres[0].localeCompare(b.genres[0]);
}