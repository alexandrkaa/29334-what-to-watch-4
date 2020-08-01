import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {movieType} from '../../types/types.js';
import {Link, withRouter} from 'react-router-dom';
import {AppRoutes} from '../../consts/consts.js';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.js';
import withTimeOut from '../../hocs/with-timeout/with-timeout.js';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this._handleMovieCardMouseEnter = this._handleMovieCardMouseEnter.bind(this);
    this._handleMovieCardMouseLeave = this._handleMovieCardMouseLeave.bind(this);
    this._handleMovieCardClick = this._handleMovieCardClick.bind(this);
  }

  _handleMovieCardMouseEnter() {
    this.props.onPlay();
  }

  _handleMovieCardMouseLeave() {
    this.props.onPause();
  }

  _handleMovieCardClick() {
    const {movie, history} = this.props;
    history.push(`${AppRoutes.FILM_PAGE}/${movie.id}`);
  }

  render() {
    const {movie} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={this._handleMovieCardMouseEnter} onMouseLeave={this._handleMovieCardMouseLeave} onClick={this._handleMovieCardClick}>
        <div className="small-movie-card__image">
          {this.props.children}
        </div>
        <h3 className="small-movie-card__title">
          <Link to={`/films/${movie.id}`}
            className="small-movie-card__link"
            href="movie-page.html"
          >{movie.title}</Link>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: movieType.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  history: PropTypes.object.isRequired,
};
export {MovieCard};
export default withRouter(withTimeOut(withVideoPlayer(MovieCard)));
