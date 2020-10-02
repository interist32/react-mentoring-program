import * as actions from '../actions/movies';


const initialState = {
  movies: [],
  isLoading: false,
  error: null,
  filterByGenre: null,
  sortBy: null,
  selectedMovieId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovieId: action.movieId,
      };
    case actions.GET_MOVIES:
      return {
        ...initialState,
        isLoading: true,
      };
    case actions.GET_MOVIES_SUCCESS:
      const {movies} = action;
      return {
        ...state,
        movies,
        isLoading: false,
      };
    case actions.GET_MOVIES_ERROR:
      const {error} = action;
      return {
        ...state,
        isLoading: false,
        error,
      };
    case actions.SET_FILTER_BY_GENRE:
      const {genre} = action;
      return {
        ...state,
        filterByGenre: genre,
      };
    case actions.ADD_MOVIE_SUCCESS:
      return {
        ...state,
        movies: [
          ...state.movies,
          action.movie,
        ],
      };
    case actions.UPDATE_MOVIE_SUCCESS:
      const movieIds = state.movies.map(movie => movie.id);
      const ind = movieIds.indexOf(action.movie.id);
      return {
        ...state,
        movies: [
          ...state.movies.slice(0, ind),
          action.movie,
          ...state.movies.slice(ind + 1),
        ],
      };
    case actions.DELETE_MOVIE_SUCCESS:
      const movieInd =
          state.movies.findIndex(movie => movie.id === action.movieId);

      return {
        ...state,
        movies: [
          ...state.movies.slice(0, movieInd),
          ...state.movies.slice(movieInd + 1),
        ],
      };
    case actions.SET_SORTING:
      return {
        ...state,
        sortBy: action.sortBy,
      };
    default:
      return state;
  }
};

export default reducer;