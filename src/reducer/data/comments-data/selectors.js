import NameSpace from '../../name-space.js';

const NAME_SPACE = NameSpace.COMMENTS_DATA;

export const getMoviesComments = (state) => {
  return state[NAME_SPACE].moviesComments;
};