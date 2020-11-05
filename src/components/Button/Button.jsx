import React from 'react';

import { classNames } from '../../utils/utils';

import PropTypes from 'prop-types';


const COLOR_TYPE_CLASS = {
    normal: '',
    primary: 'c-btn--primary',
    secondary: 'c-btn--secondary',
};


const Button = ({ type, className, colorType, onClick, ...props }) => {
    return (
        <button onClick={onClick}
            type={type}
            {...classNames(
                'c-btn',
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