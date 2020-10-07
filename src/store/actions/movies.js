export const GET_MOVIES = 'GET MOVIES';
export const GET_MOVIES_SUCCESS = 'GET MOVIES SUCCESS';
export const GET_MOVIES_ERROR = 'GET MOVIES ERROR';
export const ADD_MOVIE = 'ADD MOVIE';
export const ADD_MOVIE_SUCCESS = 'ADD MOVIE SUCCESS';
export const ADD_MOVIE_ERROR = 'ADD MOVIE ERROR';
export const UPDATE_MOVIE = 'UPDATE MOVIE';
export const UPDATE_MOVIE_SUCCESS = 'UPDATE MOVIE SUCCESS';
export const UPDATE_MOVIE_ERROR = 'UPDATE MOVIE ERROR';
export const DELETE_MOVIE = 'DELETE MOVIE';
export const DELETE_MOVIE_SUCCESS = 'DELETE MOVIE SUCCESS';
export const DELETE_MOVIE_ERROR = 'DELETE MOVIE ERROR';
export const SET_FILTER_BY_GENRE = 'SET FILTER BY GENRE';
export const SET_SORTING = 'SET SORTING';
export const SET_SELECTED_MOVIE = 'SET SELECTED MOVIE';


export const getMovies = (title) => ({
  type: GET_MOVIES,
  title,
});

export const getMoviesSuccess = (movies) => ({
  type: GET_MOVIES_SUCCESS,
  movies,
});

export const getMoviesError = (error) => ({
  type: GET_MOVIES_ERROR,
  error,
});

export const setFilterByGenre = (genre) => ({
  type: SET_FILTER_BY_GENRE,
  genre,
});

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  movie,
});

export const addMovieSuccess = (movie) => ({
  type: ADD_MOVIE_SUCCESS,
  movie,
});

export const addMovieError = (error) => ({
  type: ADD_MOVIE_ERROR,
  error,
});

export const updateMovie = (movie) => ({
  type: UPDATE_MOVIE,
  movie,
});

export const updateMovieSuccess = (movie) => ({
  type: UPDATE_MOVIE_SUCCESS,
  movie,
});

export const updateMovieError = (error) => ({
  type: UPDATE_MOVIE_ERROR,
  error,
});

export const deleteMovie = (movieId) => ({
  type: DELETE_MOVIE,
  movieId,
});

export const deleteMovieSuccess = (movieId) => ({
  type: DELETE_MOVIE_SUCCESS,
  movie,
});

export const deleteMovieError = (error) => ({
  type: DELETE_MOVIE_ERROR,
  error,
});

export const setSorting = (sortBy) => ({
  type: SET_SORTING,
  sortBy,
});

export const setSelectedMovie = (movieId) => ({
  type: SET_SELECTED_MOVIE,
  movieId,
});