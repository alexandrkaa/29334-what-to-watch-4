import React from 'react';
import {movieType, userFavoriteListType} from '../../types/types.js';
import Header from '../header/header.jsx';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import MovieCardFullButtons from '../movie-card-full-buttons/movie-card-full-buttons.jsx';
import UserProfile from '../user-profile/user-profile.jsx';

const TitleMovie = (props) => {
  const {
    movie: {
      title,
      movieGenre,
      movieDate,
      movieImage,
      movieBackground,
      id: movieId,
    },
    isAuthorized,
    userFavoriteList,
    addToUserFavoriteList,
    removeFromUserFavoriteList,
  } = props;

  const _handlePlayClick = (evt) => {
    evt.preventDefault();
    props.history.push(`/player/${movieId}`);
  };

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={movieBackground} alt="The Grand Budapest Hotel"/>
      </div>


      <Header>
        <UserProfile />
      </Header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={movieImage} alt="The Grand Budapest Hotel poster"
              width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{movieGenre}</span>
              <span className="movie-card__year">{movieDate}</span>
            </p>

            <MovieCardFullButtons
              onPlay={_handlePlayClick}
              movieId={movieId}
              isAuthorized={isAuthorized}
              userFavoriteList={userFavoriteList}
              addToUserFavoriteList={addToUserFavoriteList}
              removeFromUserFavoriteList={removeFromUserFavoriteList}
            />

          </div>
        </div>
      </div>
    </section>
  );
};

TitleMovie.propTypes = {
  movie: movieType.isRequired,
  history: PropTypes.object.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  userFavoriteList: userFavoriteListType,
  addToUserFavoriteList: PropTypes.func.isRequired,
  removeFromUserFavoriteList: PropTypes.func.isRequired,
};

export {TitleMovie};
export default withRouter(TitleMovie);
