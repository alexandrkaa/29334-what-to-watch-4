import PropTypes from 'prop-types';

export const movieType = PropTypes.exact({
  movieDescription: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ),
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  movieDirector: PropTypes.string.isRequired,
  movieStarring: PropTypes.string.isRequired,
  movieImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieDate: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
  movieBackground: PropTypes.string.isRequired,
  movieRatingScore: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
  movieRatingLevel: PropTypes.string.isRequired,
  movieRatingCount: PropTypes.string.isRequired,
  movieRunTime: PropTypes.number,
  moviePreview: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
});

export const moviesListType = PropTypes.arrayOf(movieType);

export const videoDementionType = PropTypes.oneOfType([
  PropTypes.number.isRequired,
  PropTypes.string.isRequired,
]);
