import React from 'react';

import './LinkTabs.scss';

import PropTypes from 'prop-types';
import { classNames } from '../../utils/utils';


const LinkTabs = ({ tabs, selectedText, onSelect }) => {
    return (
        <ul className="c-link-tabs">
            <LinkTab
                key={'All'}
                text={'All'}
                selected={selectedText === null}
                onSelect={() => onSelect(null)}
            />
            {
                tabs.map((tab) => (
                    <LinkTab
                        key={tab}
                        text={tab}
                        selected={tab === selectedText}
                        onSelect={onSelect}
                    />
                ))
            }
        </ul>
    );
}

LinkTabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string),
    onSelect: PropTypes.func.isRequired,
    selectedText: PropTypes.string,
};


const LinkTab = ({ text, selected, onSelect }) => (
    <li className="c-link-tabs__item">
        <span {...classNames(
            "c-link-tabs__link",
            selected ? "c-link-tabs__link--selected" : '',
        )}
            onClick={() => onSelect(text)}>{text}</span>
    </li >
);

LinkTab.propTypes = {
    text: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.bool,
};

export default LinkTabs;