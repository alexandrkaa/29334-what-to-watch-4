import React from 'react';
import PropTypes from 'prop-types';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.js';
import withTimeOut from '../../hocs/with-timeout/with-timeout.js';
import {movieType} from '../../types/types.js';
import {Link} from 'react-router-dom';

const MovieCard = (props) => {
  const {movie} = props;
  const {title} = movie;
  const _onMovieCardMouseEnter = () => {
    props.onPlay();
  };

  const _onMovieCardMouseLeave = () => {
    props.onPause();
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={_onMovieCardMouseEnter} onMouseLeave={_onMovieCardMouseLeave} >
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
  children: PropTypes.element.isRequired
};
export {MovieCard};
export default withTimeOut(withVideoPlayer(MovieCard));
