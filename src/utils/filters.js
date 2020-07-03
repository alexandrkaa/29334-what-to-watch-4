import {DEFAULT_GENRE} from '../consts/consts.js';

const getFilteredMovies = (movies, movieGenre) => {
  return movies.filter((movie) => isEqual(movie.movieGenre, movieGenre));
};

export const getMoviesByGenre = (movies, movieGenre) => {
  return movieGenre === DEFAULT_GENRE ? movies : getFilteredMovies(movies, movieGenre);
};

export const getMoviesWithLimit = (movies, start, stop) => {
  return movies.slice(start, stop);
};

export const getGenresFromMovies = (movies) => {
  return Array.from(new Set(movies.map((movie) => movie.movieGenre)));
};

export const isEqual = (firstString, secondString) => {
  return firstString.toLowerCase() === secondString.toLowerCase();
};
