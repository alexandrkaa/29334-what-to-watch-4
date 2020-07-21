import NameSpace from '../../name-space.js';

const NAME_SPACE = NameSpace.COMMENTS_DATA;

export const getMoviesComments = (state) => {
  return state[NAME_SPACE].moviesComments;
};

export const isPostCommentInProgress = (state) => {
  return state[NAME_SPACE].postCommentInProgress;
};

export const isPostCommentHasError = (state) => {
  return state[NAME_SPACE].postCommentError;
};
