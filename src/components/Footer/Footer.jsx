import React from 'react';

import MaxWidthLayout from '../../layouts/MaxWidthLayout';
import Logo from '../Logo/Logo';


const Footer = () => (
    <footer className="c-footer">
        <MaxWidthLayout>
            <Logo />
        </MaxWidthLayout>
    </footer>
);

export default Footer;