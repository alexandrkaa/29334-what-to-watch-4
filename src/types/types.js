import PropTypes from 'prop-types';

export const movieType = PropTypes.exact({
  movieDescription: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  movieDirector: PropTypes.string.isRequired,
  movieStarring: PropTypes.oneOfType([
    PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    PropTypes.string.isRequired
  ]),
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
  movieRatingLevel: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
  movieRatingCount: PropTypes.string.isRequired,
  movieRunTime: PropTypes.number,
  moviePreview: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  movieVideo: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
});

export const moviesListType = PropTypes.arrayOf(movieType);

export const videoDementionType = PropTypes.oneOfType([
  PropTypes.number.isRequired,
  PropTypes.string.isRequired,
]);
