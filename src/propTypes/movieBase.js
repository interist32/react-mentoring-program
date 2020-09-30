import PropTypes from 'prop-types';


export const MovieBase = PropTypes.shape({
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  voteAverage: PropTypes.number,
  voteCount: PropTypes.number,
  releaseDate: PropTypes.string,
  posterPath: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  budget: PropTypes.number,
  revenue: PropTypes.number,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
});