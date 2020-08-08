import React from 'react';

import Home from './containers/Home/Home';

import './App.scss';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';


const App = () => (
    <React.StrictMode>
        <ErrorBoundary>
            <Home />
        </ErrorBoundary>
    </React.StrictMode>
);

export default App;