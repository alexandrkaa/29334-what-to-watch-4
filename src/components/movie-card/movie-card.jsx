import React from 'react';
import PropTypes from 'prop-types';
import {movieType} from '../../types/types.js';
import {Link, withRouter} from 'react-router-dom';
import {AppRoutes} from '../../consts/consts.js';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.js';
import withTimeOut from '../../hocs/with-timeout/with-timeout.js';

const MovieCard = (props) => {
  const {movie, history} = props;
  const {title} = movie;
  const onMovieCardMouseEnter = () => {
    props.onPlay();
  };

  const onMovieCardMouseLeave = () => {
    props.onPause();
  };

  const onMovieCardClick = () => {
    history.push(`${AppRoutes.FILM_PAGE}/${movie.id}`);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={onMovieCardMouseEnter} onMouseLeave={onMovieCardMouseLeave} onClick={onMovieCardClick}>
      <div className="small-movie-card__image">
        {props.children}
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${movie.id}`}
          className="small-movie-card__link"
          href="movie-page.html"
        >{title}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: movieType.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  history: PropTypes.object.isRequired,
};
export {MovieCard};
export default withRouter(withTimeOut(withVideoPlayer(MovieCard)));
