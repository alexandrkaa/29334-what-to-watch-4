import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

const MoviesList = (props) => {
  const {moviesList, onMovieTitleClick} = props;

  return (
    <div className="catalog__movies-list">
      {
        moviesList.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieTitleClick={onMovieTitleClick}
            />
          );
        })
      }
    </div>
  );
};

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        movieBackground: PropTypes.string.isRequired,
        movieGenre: PropTypes.string.isRequired,
        movieDate: PropTypes.string.isRequired,
        movieImage: PropTypes.string.isRequired,
        movieRatingScore: PropTypes.string.isRequired,
        movieRatingLevel: PropTypes.string.isRequired,
        movieRatingCount: PropTypes.string.isRequired,
        movieDirector: PropTypes.string.isRequired,
        movieStarring: PropTypes.string.isRequired,
        movieDescription: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ),
      })
  ),
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default MoviesList;
