import React from 'react';

import './LinkTabs.scss';

import PropTypes from 'prop-types';


const LinkTabs = ({ links }) => {
    return (
        <ul className="c-link-tabs">
            {
                links.map(({ text, link }) => (
                    <LinkTab key={text} text={text} link={link} />
                ))
            }
        </ul>
    );
}

LinkTabs.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    })),
};


const LinkTab = ({ text, link }) => (
    <li className="c-link-tabs__item">
        <a className="c-link-tabs__link" href={link}>{text}</a>
    </li>
);

LinkTab.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default LinkTabs;