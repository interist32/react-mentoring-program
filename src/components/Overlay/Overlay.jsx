import React from 'react';

import './Overlay.scss';

const Overlay = (props) => (
    <div className="c-overlay">
        {props.children}
    </div>
);

export default Overlay;