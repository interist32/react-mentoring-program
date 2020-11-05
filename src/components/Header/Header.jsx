import React from 'react';

import Logo from '../Logo/Logo';


const Header = (props) => (
    <header className="c-header">
        <Logo />
        {props.children}
    </header>
);

export default Header;