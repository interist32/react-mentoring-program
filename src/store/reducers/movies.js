import * as actions from '../actions/movies';


const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default reducer;