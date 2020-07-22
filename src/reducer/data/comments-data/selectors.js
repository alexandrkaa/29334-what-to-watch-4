import NameSpace from '../../name-space.js';

const NAME_SPACE = NameSpace.COMMENTS_DATA;

export const getMoviesComments = (state, movieId) => {
  return state[NAME_SPACE].moviesComments[movieId];
};

export const getCommentsLoadingStatus = (state) => {
  return state[NAME_SPACE].loadingComments;
};

export const getCommentsErrorStatus = (state) => {
  return state[NAME_SPACE].loadingCommentsError;
};

export const getIsPostCommentInProgress = (state) => {
  return state[NAME_SPACE].postCommentInProgress;
};

export const getIsPostCommentHasError = (state) => {
  return state[NAME_SPACE].postCommentError;
};

export const getIsPostCommentSuccess = (state) => {
  return state[NAME_SPACE].postCommentSuccess;
};
