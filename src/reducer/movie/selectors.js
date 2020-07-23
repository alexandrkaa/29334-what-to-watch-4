import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.MOVIE;

export const getActiveGenre = (state) => {
  return state[NAME_SPACE].activeGenre;
};

export const getMoviesRenderLimit = (state) => {
  return state[NAME_SPACE].moviesRenderLimit;
};

export const getMyList = (state) => {
  return state[NAME_SPACE].myList;
};
