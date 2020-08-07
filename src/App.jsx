import React from 'react';
import Home from './containers/Home/Home';

import './App.scss';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';


const App = () => (
    <div>
        <ErrorBoundary>
            <Home />
        </ErrorBoundary>
    </div>
);

export default App;