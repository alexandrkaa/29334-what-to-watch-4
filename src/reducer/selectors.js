import {createSelector} from 'reselect';
import {getGenresFromMovies, getWithLimit, getMoviesByGenre} from '../utils/filters.js';
import {DEFAULT_GENRE, GENRES_LIMIT} from '../consts/consts.js';
import {
  getMovies,
  getTitleMovie,
  getMoviesComments,
  getMoviesLoadingStatus,
  getCommentsLoadingStatus,
  getTitleMovieLoadingStatus,
  getMovieByIdFromState,
  getMoviesLoadingErrorStatus
} from './data/selectors.js';
import {getActiveGenre, getMoviesRenderLimit} from './movie/selectors.js';
import {getAuthorizationStatus} from './user/selectors.js';

export const getGenres = createSelector(getMovies, (moviesList) => {
  const movieGenres = getWithLimit(getGenresFromMovies(moviesList), 0, GENRES_LIMIT);
  movieGenres.unshift(DEFAULT_GENRE);
  return movieGenres;
});

export const getFilteredMovies = createSelector(
    [getActiveGenre, getMoviesRenderLimit, getMovies],
    (activeGenre, moviesLimit, moviesList) => {
      return getWithLimit(getMoviesByGenre(moviesList, activeGenre), 0, moviesLimit);
    }
);

export {
  getMovies,
  getTitleMovie,
  getMoviesComments,
  getMoviesLoadingStatus,
  getCommentsLoadingStatus,
  getTitleMovieLoadingStatus,
  getMoviesLoadingErrorStatus,

  getMovieByIdFromState,
  getActiveGenre,
  getMoviesRenderLimit,

  getAuthorizationStatus,
};
