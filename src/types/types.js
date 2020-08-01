import PropTypes from 'prop-types';

export const movieType = PropTypes.exact({
  id: PropTypes.number,
  movieDescription: PropTypes.string,
  image: PropTypes.string,
  movieDirector: PropTypes.string,
  movieStarring: PropTypes.oneOfType([
    PropTypes.arrayOf(
        PropTypes.string.isRequired
    ),
    PropTypes.string
  ]),
  movieImage: PropTypes.string,
  title: PropTypes.string,
  movieGenre: PropTypes.string,
  movieDate: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  movieBackground: PropTypes.string,
  movieRatingScore: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  movieRatingLevel: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  movieRatingCount: PropTypes.string,
  movieRunTime: PropTypes.number,
  moviePreview: PropTypes.string,
  backgroundColor: PropTypes.string,
  movieVideo: PropTypes.string,
  isFavorite: PropTypes.bool,
});

export const moviesListType = PropTypes.arrayOf(movieType);

export const videoDementionType = PropTypes.oneOfType([
  PropTypes.number.isRequired,
  PropTypes.string.isRequired,
]);
