import React from 'react';

import Button from '../../components/Button/Button';

import './SearchForm.scss';


const SearchForm = () => {
    return (
        <form className="search-form">
            <input type="text"
                className="search-form__input"
                placeholder="What do you want to watch?"></input>
            <Button type="submit"
                colorType="primary"
                className="search-form__button">SEARCH</Button>
        </form>
    );
};

export default SearchForm;