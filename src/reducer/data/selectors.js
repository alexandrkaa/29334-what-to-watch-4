import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.DATA;

export const getMovies = (state) => {
  return state[NAME_SPACE].moviesList;
};

export const getTitleMovie = (state) => {
  return state[NAME_SPACE].titleMovie;
};

export const getMoviesComments = (state) => {
  return state[NAME_SPACE].moviesComments;
};

export const getMoviesLoadingStatus = (state) => {
  return state[NAME_SPACE].loadingMovies;
};

export const getCommentsLoadingStatus = (state) => {
  return state[NAME_SPACE].loadingComments;
};

export const getTitleMovieLoadingStatus = (state) => {
  return state[NAME_SPACE].loadingTitleMovie;
};
