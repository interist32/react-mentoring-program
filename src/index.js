import './index.scss';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import rootReducer from './store/reducers';
import {addMovie, editMovie, getMovies, removeMovie} from './store/sagas/movies';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(getMovies);
sagaMiddleware.run(addMovie);
sagaMiddleware.run(editMovie);
sagaMiddleware.run(removeMovie);

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
