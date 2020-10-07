import React, { useState } from 'react';
import { useFormik, Form, Formik, useField } from 'formik';
import * as Yup from 'yup';

import PropTypes from 'prop-types';
import { Movie, MovieBase } from '../../propTypes';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import './MovieForm.scss';


const FormInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <label className="home-movie-form__label">
            {label}
            <Input
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <div className="home-movie-form__error">
                    {meta.error}
                </div>
            ) : null}
        </label>
    );
};


const MovieForm = ({ mode, movie, onSubmit }) => {
    return (<Formik
        initialValues={{
            title: '',
            overview: '',
            releaseDate: '',
            posterPath: '',
            runtime: '',
            ...movie,
            genres: movie ? movie.genres.join(', ') : '',
        }}
        validationSchema={Yup.object({
            title: Yup.string().required('Title is required'),
            overview: Yup.string().required('Overview is required'),
            releaseDate: Yup.date(),
            posterPath: Yup.string().url().required('Image must be a valid URL'),
            genres: Yup.array().transform(function (value, originalValue) {
                if (this.isType(value)) return value;
                return originalValue.split(',').map(s => s.trim()).filter(Boolean);
            }).required('Comma separated genres are required'),
            runtime: Yup.number().min(0).required('Duration is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
            const movie = {
                ...values,
                genres: values.genres.split(',').map(s => s.trim()).filter(Boolean),
                runtime: Number(values.runtime),
            };
            onSubmit(movie);
        }}
    >
        {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
                {movie && movie.id ?
                    <FormInput name="id" type="text" label="ID" readOnly /> :
                    null
                }
                <FormInput name="title" type="text" label="Title" />
                <FormInput name="overview" type="text" label="Overview" />
                <FormInput name="releaseDate" type="date" label="Release date" />
                <FormInput name="posterPath" type="text" label="Movie Image URL" />
                <FormInput name="genres" type="text" label="Genres" />
                <FormInput name="runtime" type="number" label="Duration" />
                <div className="home-movie-form__actions">
                    <Button type="reset" colorType="secondary">Reset</Button>
                    <Button type="submit" colorType="primary">Save</Button>
                </div>
            </Form>
        )}
    </Formik>)
};

MovieForm.propTypes = {
    movie: PropTypes.oneOfType([Movie, MovieBase]),
    onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;