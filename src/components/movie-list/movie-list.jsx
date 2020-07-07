import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import {moviesListType} from '../../types/types.js';
import {START_PREVIEW_DELAY, PreviewVideoSize} from '../../consts/consts.js';

const MoviesList = (props) => {
  const {moviesList, onMovieTitleClick} = props;

  return (
    <React.Fragment>
      {
        moviesList.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              isMuted={true}
              videoHeight={PreviewVideoSize.height}
              videoWidth={PreviewVideoSize.width}
              onMovieTitleClick={onMovieTitleClick}
              timeOutDelay={START_PREVIEW_DELAY}
            />
          );
        })
      }
    </React.Fragment>
  );
};

MoviesList.propTypes = {
  moviesList: moviesListType.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default MoviesList;
