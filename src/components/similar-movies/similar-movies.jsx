import React from 'react';
import {moviesListType} from '../../types/types.js';
import MoviesList from '../movie-list/movie-list.jsx';

const SimilarMovies = (props) => {
  const {moviesList} = props;
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__movies-list">
        <MoviesList moviesList={moviesList} />
      </div>
    </section>
  );
};

SimilarMovies.propTypes = {
  moviesList: moviesListType
};

export default React.memo(SimilarMovies);
