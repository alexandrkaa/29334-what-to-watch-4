import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const MovieCardFullButtons = (props) => {
  const {onPlay, movieId, isReviewVisible} = props;
  return (
    <div className="movie-card__buttons">
      <button onClick={onPlay} className="btn btn--play movie-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list movie-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
      {
        isReviewVisible &&
        <NavLink to={`/films/${movieId}/review`} className="btn movie-card__button">Add review</NavLink>
      }
    </div>
  );
};

MovieCardFullButtons.defaultProps = {
  isReviewVisible: false,
};

MovieCardFullButtons.propTypes = {
  onPlay: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired,
  isReviewVisible: PropTypes.bool,
};

export default MovieCardFullButtons;
