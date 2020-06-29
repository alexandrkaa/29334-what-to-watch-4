import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

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
              onMovieTitleClick={onMovieTitleClick}
            />
          );
        })
      }
    </React.Fragment>
  );
};

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
      PropTypes.exact({
        movieDescription: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ),
        image: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        movieDirector: PropTypes.string.isRequired,
        movieStarring: PropTypes.string.isRequired,
        movieImage: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        movieGenre: PropTypes.string.isRequired,
        movieDate: PropTypes.string.isRequired,
        movieBackground: PropTypes.string.isRequired,
        movieRatingScore: PropTypes.string.isRequired,
        movieRatingLevel: PropTypes.string.isRequired,
        movieRatingCount: PropTypes.string.isRequired,
        movieRunTime: PropTypes.number,
        moviePreview: PropTypes.string.isRequired,
      })
  ),
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default MoviesList;
