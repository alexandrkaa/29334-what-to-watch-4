import React from 'react';
import PropTypes from 'prop-types';
import {userFavoriteListType} from '../../types/types.js';
import {NavLink} from 'react-router-dom';
import {isMovieInUserFavoriteList} from '../../utils/filters.js';

const MovieCardFullButtons = (props) => {
  const {onPlay, movieId, isAuthorized, userFavoriteList, addToUserFavoriteList, removeFromUserFavoriteList} = props;
  const isInUserFavoriteList = isMovieInUserFavoriteList(userFavoriteList, movieId);
  const _onUserFavoriteListClick = (evt) => {
    evt.preventDefault();
    if (isInUserFavoriteList) {
      removeFromUserFavoriteList(movieId);
    } else {
      addToUserFavoriteList(movieId);
    }
  };

  return (
    <div className="movie-card__buttons">
      <button onClick={onPlay} className="btn btn--play movie-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button onClick={_onUserFavoriteListClick} className="btn btn--list movie-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref={isInUserFavoriteList ? `#in-list` : `#add`}></use>
        </svg>
        <span>My list</span>
      </button>
      {
        isAuthorized &&
        <NavLink to={`/films/${movieId}/review`} className="btn movie-card__button">Add review</NavLink>
      }
    </div>
  );
};

MovieCardFullButtons.defaultProps = {
  isAuthorized: false,
};

MovieCardFullButtons.propTypes = {
  onPlay: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired,
  isAuthorized: PropTypes.bool,
  userFavoriteList: userFavoriteListType,
  addToUserFavoriteList: PropTypes.func.isRequired,
  removeFromUserFavoriteList: PropTypes.func.isRequired,
};

export default MovieCardFullButtons;
