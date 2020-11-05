import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import {addMovie, editMovie, getMovies, removeMovie} from './sagas/movies';


const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
      rootReducer,
      applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(getMovies);
  sagaMiddleware.run(addMovie);
  sagaMiddleware.run(editMovie);
  sagaMiddleware.run(removeMovie);

  return store;
};

export default configureStore;