import {DEFAULT_GENRE} from '../consts/consts.js';

const getFilteredMovies = (movies, movieGenre) => {
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
