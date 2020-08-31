import React from 'react';

import './Input.scss';

import PropTypes from 'prop-types';

import { classNames } from '../../utils/utils';


const Input = ({ className, value, placeholder }) => (
    <input {...classNames(
        'c-input',
        className,
    )}
        type="text"
        value={value}
        placeholder={placeholder} />
);

Input.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
};

export default Input;