import React from 'react';
import PropTypes from 'prop-types';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.js';
import {movieType} from '../../types/types.js';

const MovieCard = (props) => {
  const {movie, onMovieTitleClick} = props;
  const {title} = movie;
  const _onMovieCardMouseEnter = () => {
    props.onPlay();
  };

  const _onMovieCardMouseLeave = () => {
    props.onPause();
  };

  const _onMovieTitleClick = onMovieTitleClick.bind(null, movie);
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={_onMovieCardMouseEnter} onMouseLeave={_onMovieCardMouseLeave} >
      <div className="small-movie-card__image" onClick={_onMovieTitleClick}>
        {props.children}
      </div>
      <h3 className="small-movie-card__title" onClick={_onMovieTitleClick}>
        <a
          className="small-movie-card__link"
          href="movie-page.html"
        >{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: movieType.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};
export {MovieCard};
export default withVideoPlayer(MovieCard);
