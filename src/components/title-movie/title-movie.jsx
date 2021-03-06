import React, {PureComponent} from 'react';
import {movieType} from '../../types/types.js';
import Header from '../header/header.jsx';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import MovieCardFullButtons from '../movie-card-full-buttons/movie-card-full-buttons.jsx';
import UserProfile from '../user-profile/user-profile.jsx';
import MovieCardTitle from '../movie-card-title/movie-card-title.jsx';
import MovieCardBackground from '../movie-card-background/movie-card-background.jsx';
import {AppRoutes} from '../../consts/consts.js';

class TitleMovie extends PureComponent {
  constructor(props) {
    super(props);
    this._handlePlayClick = this._handlePlayClick.bind(this);
  }

  _handlePlayClick(evt) {
    const {movie: {id: movieId}} = this.props;
    evt.preventDefault();
    this.props.history.push(`${AppRoutes.FULL_PLAYER_PAGE}/${movieId}`);
  }

  render() {
    const {
      movie: {
        title,
        movieGenre,
        movieDate,
        movieImage,
        movieBackground,
        id: movieId,
        isFavorite,
      },
      isAuthorized,
      addToUserFavoriteList,
      removeFromUserFavoriteList,
    } = this.props;

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
                onPlay={this._handlePlayClick}
                movieId={movieId}
                isAuthorized={isAuthorized}
                isInUserFavoriteList={isFavorite}
                addToUserFavoriteList={addToUserFavoriteList}
                removeFromUserFavoriteList={removeFromUserFavoriteList}
                isMainPage={true}
                history={this.props.history}
              />

            </div>
          </div>
        </div>
      </section>
    );
  }
}


TitleMovie.propTypes = {
  movie: movieType.isRequired,
  history: PropTypes.object.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  addToUserFavoriteList: PropTypes.func.isRequired,
  removeFromUserFavoriteList: PropTypes.func.isRequired,
};

export {TitleMovie};
export default withRouter(TitleMovie);
