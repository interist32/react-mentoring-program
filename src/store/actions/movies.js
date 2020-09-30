export const GET_MOVIES = 'GET MOVIES';
export const GET_MOVIES_SUCCESS = 'GET MOVIES SUCCESS';
export const GET_MOVIES_ERROR = 'GET MOVIES ERROR';


export const getMovies = () => ({
  type: GET_MOVIES,
});

export const getMoviesSuccess = (movies) => ({
  type: GET_MOVIES_SUCCESS,
  movies,
});

export const getMoviesError = (error) => ({
  type: GET_MOVIES_ERROR,
  error,
});