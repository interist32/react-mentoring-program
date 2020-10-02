import React from 'react';

import './Input.scss';

import PropTypes from 'prop-types';

import { classNames } from '../../utils/utils';


const Input = ({
    className,
    value,
    placeholder,
    onChange,
}) => (
        <input {...classNames(
            'c-input',
            className,
        )}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={(event) => onChange(event.target.value)} />
    );

Input.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
};

export default Input;