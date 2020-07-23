import React from 'react';
import PropTypes from 'prop-types';
import {myListType} from '../../types/types.js';
import {NavLink} from 'react-router-dom';
import {isMovieInMyList} from '../../utils/filters.js';

const MovieCardFullButtons = (props) => {
  const {onPlay, movieId, isAuthorized, myList, addToMyList, removeFromMyList} = props;
  const _isInMyList = isMovieInMyList(myList, movieId);
  const _onMyListClick = (evt) => {
    evt.preventDefault();
    if (_isInMyList) {
      removeFromMyList(movieId);
    } else {
      addToMyList(movieId);
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
      <button onClick={_onMyListClick} className="btn btn--list movie-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref={_isInMyList ? `#in-list` : `#add`}></use>
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
  myList: myListType,
  addToMyList: PropTypes.func.isRequired,
  removeFromMyList: PropTypes.func.isRequired,
};

export default MovieCardFullButtons;
