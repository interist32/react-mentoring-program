import React from 'react';

import LinkTabs from '../../components/LinkTabs/LinkTabs';

import './FilterOptions.scss';


const links = [
    { text: 'All', link: '#all' },
    { text: 'Documentary', link: '#documentary' },
    { text: 'Comedy', link: '#comedy' },
    { text: 'Horror', link: '#horror' },
    { text: 'Crime', link: '#crime' },
];


const FilterOptions = () => {
    return (
        <div className="filter-options">
            <LinkTabs links={links} />

            <div className="sorting">
                <label className="sorting__title">
                    SORT BY
                        <select className="sorting__select">
                        <option value="date">RELEASE DATE</option>
                    </select>
                </label>
            </div>
        </div>
    );
};

export default FilterOptions;