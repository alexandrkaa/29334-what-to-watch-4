import React from 'react';
import {convertMinutesToHoursMins} from '../../utils/common.js';
import {movieType} from '../../types/types.js';

const MovieCardFullDetails = (props) => {
  const {
    movieDirector,
    movieStarring,
    movieRunTime,
    movieGenre,
    movieDate
  } = props.movie;
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
            {movieStarring}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{convertMinutesToHoursMins(movieRunTime)}</span>
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
  movie: movieType.isRequired,
};

export default MovieCardFullDetails;
