import React from 'react';

import './Button.scss';

import { classNames } from '../../utils/utils';

import PropTypes from 'prop-types';


const COLOR_TYPE_CLASS = {
    normal: '',
    primary: 'btn--primary',
    secondary: 'btn--secondary',
};


const Button = ({ className, colorType, ...props }) => {
    return (
        <button
            {...classNames(
                'btn',
                COLOR_TYPE_CLASS[colorType],
                className,
            )}>
            {props.children}
        </button >
    );
};


Button.propTypes = {
    colorType: PropTypes.oneOf(Object.keys(COLOR_TYPE_CLASS)),
};

Button.defaultProps = {
    colorType: 'normal',
};

export default Button;