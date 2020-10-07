import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';


const NotFound = () => (
    <div className="not-found">
        <h1 className="not-found__header">
            404
        </h1>
        <div className="not-found__text">
            Page Not Found
        </div>
        <Link to="/" className="not-found__link">
            Go back to home
        </Link>
    </div>
);

export default NotFound;