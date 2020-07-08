import React from 'react';
import {movieType} from '../../types/types.js';

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
        {movieDescription}
        <p className="movie-card__director"><strong>Director: {movieDirector}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {movieStarring}</strong></p>
      </div>
    </React.Fragment>
  );
};

MovieCardFullOverView.propTypes = {
  movie: movieType.isRequired
};

export default MovieCardFullOverView;
