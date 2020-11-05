import React from 'react';
import { connect } from 'react-redux';

import * as moviesActions from '../../store/actions/movies';
import * as moviesSelectors from '../../store/selectors/movies';

import LinkTabs from '../../components/LinkTabs/LinkTabs';


const FilterOptions = ({
    genres,
    filterByGenre,
    dispatchSetFilterByGenre,
    sortBy,
    dispatchSetSorting,
}) => {
    const handleOnSelectTab = (genre) => {
        dispatchSetFilterByGenre(genre);
    };

    const handleOnChange = (e) => {
        dispatchSetSorting(e.target.value);
    };

    const options = [
        'Genre',
        'Rating',
        'Release date',
    ].map((sortingType) => (
        <option
            key={sortingType}
            value={sortingType.toLowerCase()}>{sortingType}</option>
    ));

    return (
        <div className="home-filter-options">
            <LinkTabs
                tabs={genres}
                selectedText={filterByGenre}
                onSelect={handleOnSelectTab}
            />

            <div className="home-sorting">
                <label className="home-sorting__title">
                    SORT BY
                    <select
                        onChange={handleOnChange}
                        value={sortBy || ''}
                        className="home-sorting__select">
                        {options}
                    </select>
                </label>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        genres: moviesSelectors.genres(state),
        filterByGenre: moviesSelectors.filterByGenre(state),
        sortBy: moviesSelectors.sortBy(state),
    };
};

const mapDispatchToProps = {
    dispatchSetFilterByGenre: moviesActions.setFilterByGenre,
    dispatchSetSorting: moviesActions.setSorting,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FilterOptions);