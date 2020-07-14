import {DEFAULT_GENRE, MOVIES_LIKE_THIS_NUM} from '../consts/consts.js';

export const getFilteredMovies = (movies, movieGenre) => {
  return movies.filter((movie) => isSameText(movie.movieGenre, movieGenre));
};

export const getMoviesByGenre = (movies, movieGenre) => {
  return movieGenre === DEFAULT_GENRE ? movies : getFilteredMovies(movies, movieGenre);
};

export const getWithLimit = (movies, start, stop) => {
  return movies.slice(start, stop);
};

export const getGenresFromMovies = (movies) => {
  return Array.from(new Set(movies.map((movie) => movie.movieGenre)));
};

export const isSameText = (firstString, secondString) => {
  return firstString.toLowerCase() === secondString.toLowerCase();
};

export const getMovieById = (moviesList, id) => {
  const [movie] = moviesList.filter((it) => it.id === parseInt(id, 10));
  return movie;
};

export const getSimilarMovies = (movies, currentMovie) => {
  return getWithLimit(movies.filter((movie) => isSameText(movie.movieGenre, currentMovie.movieGenre) && movie.id !== currentMovie.id), 0, MOVIES_LIKE_THIS_NUM);
};
