import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {movie, onMovieCardMouseEnter, onMovieTitleClick} = props;
  const {title, image} = movie;

  const _onMovieCardMouseEnter = onMovieCardMouseEnter.bind(null, movie);
  const _onMovieTitleClick = onMovieTitleClick.bind(null, movie);
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={_onMovieCardMouseEnter}>
      <div className="small-movie-card__image" onClick={_onMovieTitleClick}>
        <img src={image} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title" onClick={_onMovieTitleClick}>
        <a
          className="small-movie-card__link"
          href="movie-page.html"
        >{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    movieBackground: PropTypes.string.isRequired,
    movieGenre: PropTypes.string.isRequired,
    movieDate: PropTypes.string.isRequired,
    movieImage: PropTypes.string.isRequired,
    movieRatingScore: PropTypes.string.isRequired,
    movieRatingLevel: PropTypes.string.isRequired,
    movieRatingCount: PropTypes.string.isRequired,
    movieDirector: PropTypes.string.isRequired,
    movieStarring: PropTypes.string.isRequired,
    movieDescription: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ),
  }),
  onMovieCardMouseEnter: PropTypes.func.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired
};

export default MovieCard;
