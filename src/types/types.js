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
  movieDate: PropTypes.string.isRequired,
  movieBackground: PropTypes.string.isRequired,
  movieRatingScore: PropTypes.string.isRequired,
  movieRatingLevel: PropTypes.string.isRequired,
  movieRatingCount: PropTypes.string.isRequired,
  movieRunTime: PropTypes.number,
  moviePreview: PropTypes.string.isRequired,
});

export const moviesListType = PropTypes.arrayOf(movieType);

export const titleMovieType = PropTypes.exact({
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
});
