import React from 'react';

import PropTypes from 'prop-types';

import { classNames } from '../../utils/utils';


const Input = ({
    className,
    name,
    value,
    type = 'text',
    placeholder,
    onChange,
    onBlur,
    ...props
}) => (
        <input {...classNames(
            'c-input',
            className,
        )}
            {...props}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
        />
    );

Input.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    type: PropTypes.oneOf(['date', 'text', 'number']),
};

export default Input;