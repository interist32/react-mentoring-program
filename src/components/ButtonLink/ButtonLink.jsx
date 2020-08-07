import React from 'react';

import './ButtonLink.scss';

import { classNames } from '../../utils/utils';

import PropTypes from 'prop-types';


const ButtonLink = ({ className, ...props }) => (
    <a {...props}
        {...classNames(
            'button-link',
            className,
        )}>
        {props.children}
    </a>
);

ButtonLink.propTypes = {
    href: PropTypes.string.isRequired,
};

export default ButtonLink;