import React from 'react';
import PropTypes from 'prop-types';
import {convertSecondsToHoursMins} from '../../utils/common.js';

const MovieCardFullDetails = (props) => {
  const {
    movie: {
      movieDirector,
      movieStarring,
      movieRunTime,
      movieGenre,
      movieDate
    }
  } = props;
  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{movieDirector}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {movieStarring.split(`, `).map((actor, idx) => {
              return (
                <React.Fragment key={`${actor}_${idx}`}>
                  {actor} <br />
                </React.Fragment>
              );
            })}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{convertSecondsToHoursMins(movieRunTime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{movieGenre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{movieDate}</span>
        </p>
      </div>
    </div>
  );
};

MovieCardFullDetails.propTypes = {
  movie: PropTypes.shape({
    movieDescription: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ),
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
    movieRunTime: PropTypes.number.isRequired,
  })
};

export default MovieCardFullDetails;