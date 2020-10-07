import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/Button/Button';
import { useParams, useHistory } from 'react-router-dom';
import * as moviesActions from '../../store/actions/movies';

import './SearchForm.scss';

import Input from '../../components/Input/Input';


const SearchForm = ({ dispatchGetMovies, }) => {
    const history = useHistory();
    const { searchQuery } = useParams();
    const [query, setQuery] = useState(searchQuery || '');

    useEffect(() => {
        dispatchGetMovies(searchQuery);
    }, [searchQuery]);

    const handleSubmit = (e) => {
        e.preventDefault();
        query && history.push(`/search/${query}`);
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <form className="home-search-form" onSubmit={handleSubmit}>
            <Input
                name="search"
                className="home-search-form__input"
                placeholder="What do you want to watch?"
                onChange={handleChange}
                value={query} />
            <Button type="submit"
                colorType="primary"
                className="home-search-form__button">SEARCH</Button>
        </form>
    );
};

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = {
    dispatchGetMovies: moviesActions.getMovies,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm);