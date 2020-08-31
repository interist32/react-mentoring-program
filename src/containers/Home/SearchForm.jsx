import React from 'react';

import Button from '../../components/Button/Button';

import './SearchForm.scss';

import Input from '../../components/Input/Input';


const SearchForm = () => {
    return (
        <form className="home-search-form">
            <Input
                className="home-search-form__input"
                placeholder="What do you want to watch?" />
            <Button type="submit"
                colorType="primary"
                className="home-search-form__button">SEARCH</Button>
        </form>
    );
};

export default SearchForm;