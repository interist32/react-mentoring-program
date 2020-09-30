import './index.scss';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import rootReducer from './store/reducers';
import moviesSaga from './store/sagas/movies';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(moviesSaga);

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
