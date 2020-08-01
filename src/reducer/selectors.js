import {createSelector} from 'reselect';
import {getGenresFromMovies, getWithLimit, getMoviesByGenre, getMovieByIdFilter} from '../utils/filters.js';
import {DEFAULT_GENRE, GENRES_LIMIT} from '../consts/consts.js';
import {
  getMovies,
  getTitleMovie,
  getMoviesLoadingStatus,
  getMoviesLoadingErrorStatus,
  getTitleMovieLoadingStatus,
  getTitleMovieLoadingErrorStatus,
  getMovieById,
  getUserFavoriteList,
} from './data/movies-data/selectors.js';

import {
  getMoviesComments,
  getCommentsLoadingStatus,
  getCommentsErrorStatus,
  getIsPostCommentInProgress,
  getIsPostCommentHasError,
} from './data/comments-data/selectors.js';

import {
  getActiveGenre,
  getMoviesRenderLimit,
} from './movie/selectors.js';

import {
  getAuthorizationStatus,
  hasUserLogined,
  getLoginStatusCode,
  getUserData,
  getIsLoading,
} from './user/selectors.js';

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

export const getMoviesDataFromUserFavoriteList = createSelector(
    [getMovies],
    (moviesList) => {
      return moviesList.filter((movie) => movie.isFavorite === true);
    }
);

export const getTitleMovieMemo = createSelector(
    [getMovies, getTitleMovie],
    (moviesList, titleMovie) => {
      return getMovieByIdFilter(moviesList, titleMovie.id) || {};
    }
);


export {
  getMovies,
  getTitleMovie,
  getMoviesLoadingStatus,
  getMoviesLoadingErrorStatus,
  getTitleMovieLoadingStatus,
  getTitleMovieLoadingErrorStatus,
  getMovieById,

  getMoviesComments,
  getCommentsLoadingStatus,
  getCommentsErrorStatus,
  getIsPostCommentInProgress,
  getIsPostCommentHasError,

  getActiveGenre,
  getMoviesRenderLimit,
  getUserFavoriteList,

  getAuthorizationStatus,
  hasUserLogined,
  getLoginStatusCode,
  getUserData,
  getIsLoading
};
