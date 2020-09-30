import React from 'react';

import * as moviesActions from '../../store/actions/movies';
import * as moviesSelectors from '../../store/selectors/movies';

import LinkTabs from '../../components/LinkTabs/LinkTabs';

import './FilterOptions.scss';
import { connect } from 'react-redux';


const FilterOptions = ({ genres, filterByGenre, dispatchSetFilterByGenre }) => {
    const handleOnSelectTab = (genre) => {
        dispatchSetFilterByGenre(genre);
    };

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
                        <select className="home-sorting__select">
                        <option value="date">RELEASE DATE</option>
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
    };
};

const mapDispatchToProps = {
    dispatchSetFilterByGenre: moviesActions.setFilterByGenre,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FilterOptions);