import React from 'react';
import {movieType, userFavoriteListType} from '../../types/types.js';
import Header from '../header/header.jsx';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import MovieCardFullButtons from '../movie-card-full-buttons/movie-card-full-buttons.jsx';
import UserProfile from '../user-profile/user-profile.jsx';
import MovieCardTitle from '../movie-card-title/movie-card-title.jsx';
import MovieCardBackground from '../movie-card-background/movie-card-background.jsx';

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
      <MovieCardBackground movieBackground={movieBackground} title={title} />
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
            <MovieCardTitle title={title} movieGenre={movieGenre} movieDate={movieDate} />
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
