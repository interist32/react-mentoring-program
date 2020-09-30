import PropTypes from 'prop-types';

import {MovieBase} from './';

export const Movie = PropTypes.shape({
  ...MovieBase,
  id: PropTypes.number.isRequired,
});