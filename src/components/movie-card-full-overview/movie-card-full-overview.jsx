import React from 'react';
import PropTypes from 'prop-types';

const MovieCardFullOverView = (props) => {
  const {
    movieRatingScore,
    movieRatingLevel,
    movieRatingCount,
    movieDescription,
    movieDirector,
    movieStarring
  } = props.movie;
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{movieRatingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{movieRatingLevel}</span>
          <span className="movie-rating__count">{movieRatingCount}</span>
        </p>
      </div>

      <div className="movie-card__text">
        {
          movieDescription.map((it, id) => {
            return (
              <p key={id}>{it}</p>
            );
          })
        }
        <p className="movie-card__director"><strong>Director: {movieDirector}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {movieStarring}</strong></p>
      </div>
    </React.Fragment>
  );
};

MovieCardFullOverView.propTypes = {
  movie: PropTypes.exact({
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
  }),
};

export default MovieCardFullOverView;
