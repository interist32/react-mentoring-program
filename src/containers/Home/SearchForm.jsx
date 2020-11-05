import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/Button/Button';
import { useRouter } from 'next/router';
import * as moviesActions from '../../store/actions/movies';

import Input from '../../components/Input/Input';


const SearchForm = ({ dispatchGetMovies, }) => {
    const router = useRouter();
    const searchQuery = router.query.searchQuery || '';
    const [query, setQuery] = useState(searchQuery);

    useEffect(() => {
        setQuery(searchQuery);
        dispatchGetMovies(searchQuery);
    }, [searchQuery]);

    const handleSubmit = (e) => {
        e.preventDefault();
        query && router.push(`/search/${query}`);
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