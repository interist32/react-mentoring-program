import React from 'react';

import Home from './containers/Home/Home';

import './App.scss';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const App = () => (
    <React.StrictMode>
        <ErrorBoundary>
            <Router>
                <Home />
            </Router>
        </ErrorBoundary>
    </React.StrictMode>
);

export default App;