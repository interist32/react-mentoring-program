import React from 'react';

import './LinkTabs.scss';

import PropTypes from 'prop-types';


export default class LinkTabs extends React.Component {
    constructor(props) {
        super(props);

        this.links = props.links;
    }

    render() {
        return (
            <ul className="c-link-tabs">
                {
                    this.links.map(({ text, link }) => (
                        <LinkTab key={text} text={text} link={link} />
                    ))
                }
            </ul>
        );
    }
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