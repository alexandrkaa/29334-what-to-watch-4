import React from 'react';
import MovieCard from '../movie-card/movie-card.jsx';
import {moviesListType} from '../../types/types.js';
import {START_PREVIEW_DELAY, PreviewVideoSize} from '../../consts/consts.js';

const MoviesList = (props) => {
  const {moviesList} = props;

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
              timeOutDelay={START_PREVIEW_DELAY}
              videoSrc={movie.moviePreview}
            />
          );
        })
      }
    </React.Fragment>
  );
};

MoviesList.propTypes = {
  moviesList: moviesListType.isRequired,
};

export default MoviesList;
