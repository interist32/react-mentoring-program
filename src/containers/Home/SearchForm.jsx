import React from 'react';

import Button from '../../components/Button/Button';

import './SearchForm.scss';


const SearchForm = () => {
    return (
        <form className="home-search-form">
            <input type="text"
                className="home-search-form__input"
                placeholder="What do you want to watch?"></input>
            <Button type="submit"
                colorType="primary"
                className="home-search-form__button">SEARCH</Button>
        </form>
    );
};

export default SearchForm;