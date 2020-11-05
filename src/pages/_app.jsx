import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import React from 'react';

import '../index.scss';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function App({ Component, pageProps }) {
    const store = configureStore();

    return (
        <Provider store={store}>
            <ErrorBoundary>
                <Component {...pageProps} />
            </ErrorBoundary>
        </Provider>);
}