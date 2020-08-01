import NameSpace from '../../name-space.js';

const NAME_SPACE = NameSpace.MOVIE_DATA;

export const getMovies = (state) => {
  return state[NAME_SPACE].moviesList;
};

export const getTitleMovie = (state) => {
  return state[NAME_SPACE].titleMovie;
};

export const getMoviesLoadingStatus = (state) => {
  return state[NAME_SPACE].loadingMovies;
};

export const getMoviesLoadingErrorStatus = (state) => {
  return state[NAME_SPACE].loadingMoviesError;
};

export const getCommentsLoadingStatus = (state) => {
  return state[NAME_SPACE].loadingComments;
};

export const getTitleMovieLoadingStatus = (state) => {
  return state[NAME_SPACE].loadingTitleMovie;
};

export const getTitleMovieLoadingErrorStatus = (state) => {
  return state[NAME_SPACE].loadingTitleMovieError;
};

export const getMovieById = (state, id) => {
  const [movie] = getMovies(state).find((it) => it.id === id);
  return movie;
};

export const getUserFavoriteList = (state) => {
  return state[NAME_SPACE].userFavoriteList;
};
