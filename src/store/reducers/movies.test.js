import * as actions from '../actions/movies';

import reducer from './movies';


describe('Movies reducer', () => {
  const initialState = reducer(undefined, {type: ''});

  it('returns initialState for unrelated action', () => {
    const state = reducer(initialState, {type: 'UNRELATED ACTION'});
    expect(state).toEqual(initialState);
  });

  it(`${actions.GET_MOVIES} sets loading state`, () => {
    const state = reducer(initialState, actions.getMovies());
    expect(state).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it(`${actions.GET_MOVIES_SUCCESS} sets loaded movies`, () => {
    const newMovies = [
      {id: 1234, title: 'Big Lebowski'},
      {id: 5678, title: 'The Matrix'},
    ];
    const {isLoading, movies} =
        reducer({}, actions.getMoviesSuccess(newMovies));

    expect(isLoading).toBe(false);
    expect(movies).toEqual(newMovies);
  });

  it(`${actions.GET_MOVIES_ERROR} sets error`, () => {
    const errorMessage = 'Load failed';
    const {isLoading, error} = reducer({}, actions.getMoviesError(error));

    expect(isLoading).toBe(false);
    expect(error).toBe(error);
  });

  it(`${actions.SET_FILTER_BY_GENRE} sets genre`, () => {
    const genre = 'Drama';
    const {filterByGenre} = reducer({}, actions.setFilterByGenre(genre));

    expect(filterByGenre).toBe(genre);
  });

  it(`${actions.SET_SORTING} sets sorting`, () => {
    const sorting = 'title';
    const {sortBy} = reducer({}, actions.setSorting(sorting));

    expect(sortBy).toBe(sorting);
  });

  it(`${actions.ADD_MOVIE_SUCCESS} adds movie`, () => {
    const newMovie = {id: 1234, title: 'Big Lebowski'};
    const {movies} = reducer(initialState, actions.addMovieSuccess(newMovie));

    expect(movies).toContain(newMovie);
  });

  it(`${actions.UPDATE_MOVIE_SUCCESS} updates movie`, () => {
    const newMovie = {id: 1234, title: 'The Big Lebowski'};
    const existingState = {
      ...initialState,
      movies: [
        {id: 1234, title: 'Lebowski'},
      ],
    };
    const {movies} =
        reducer(existingState, actions.updateMovieSuccess(newMovie));

    expect(movies).toEqual([{...newMovie}]);
    expect(movies.length).toBe(1);
  });

  it(`${actions.DELETE_MOVIE_SUCCESS} deletes movie`, () => {
    const movie = {id: 1234, title: 'Lebowski'};
    const existingState = {
      ...initialState,
      movies: [
        {id: 1234, title: 'Lebowski'},
      ],
    };
    const {movies} = reducer(existingState, actions.deleteMovieSuccess(movie));

    expect(movies).not.toContain(movie);
  });
});