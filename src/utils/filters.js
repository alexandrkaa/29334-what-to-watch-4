import {DEFAULT_GENRE} from '../consts/consts.js';

const getFilteredMovies = (movies, movieGenre) => {
  return movies.filter((movie) => movie.movieGenre.toLowerCase() === movieGenre.toLowerCase());
};

export const getMoviesByGenre = (movies, movieGenre) => {
  return movieGenre === DEFAULT_GENRE ? movies : getFilteredMovies(movies, movieGenre);
};

export const getGenresFromMovies = (movies) => {
  return Array.from(new Set(movies.map((movie) => movie.movieGenre)));
};

export const isEqual = (movieGenre, activeGenre) => {
  return movieGenre.toLowerCase() === activeGenre.toLowerCase();
};
