import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {AppRoutes} from '../../consts/consts.js';

class MovieCardFullButtons extends PureComponent {
  constructor(props) {
    super(props);
    this._handleUserFavoriteListClick = this._handleUserFavoriteListClick.bind(this);
  }

  _handleUserFavoriteListClick(evt) {
    const {movieId, addToUserFavoriteList, removeFromUserFavoriteList, isAuthorized, history, isInUserFavoriteList} = this.props;
    evt.preventDefault();
    if (!isAuthorized) {
      history.push(AppRoutes.LOGIN_PAGE);
    } else {
      if (isInUserFavoriteList) {
        removeFromUserFavoriteList(movieId);
      } else {
        addToUserFavoriteList(movieId);
      }
    }
  }

  render() {
    const {onPlay, movieId, isMainPage, isInUserFavoriteList} = this.props;
    return (
      <div className="movie-card__buttons">
        <button onClick={onPlay} className="btn btn--play movie-card__button" type="button">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <button onClick={this._handleUserFavoriteListClick} className="btn btn--list movie-card__button" type="button">
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref={isInUserFavoriteList ? `#in-list` : `#add`}></use>
          </svg>
          <span>My list</span>
        </button>
        {
          !isMainPage &&
          <NavLink to={`/films/${movieId}/review`} className="btn movie-card__button">Add review</NavLink>
        }
      </div>
    );
  }
}

MovieCardFullButtons.defaultProps = {
  isMainPage: false,
};

MovieCardFullButtons.propTypes = {
  onPlay: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired,
  isAuthorized: PropTypes.bool,
  history: PropTypes.object.isRequired,
  isInUserFavoriteList: PropTypes.bool.isRequired,
  addToUserFavoriteList: PropTypes.func.isRequired,
  removeFromUserFavoriteList: PropTypes.func.isRequired,
  isMainPage: PropTypes.bool.isRequired,
};

export default MovieCardFullButtons;
