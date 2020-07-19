import {extendObject} from '../../../utils/common.js';

const ActionTypes = {
  FETCH_MOVIES_COMMENTS_DATA: `FETCH_MOVIES_COMMENTS_DATA`,
  FETCH_MOVIES_COMMENTS_DATA_SUCCESS: `FETCH_MOVIES_COMMENTS_DATA_SUCCESS`,
  POST_COMMENT_IN_PROGRESS: `POST_COMMENT_IN_PROGRESS`,
  POST_COMMENT_SUCCESS: `POST_COMMENT_SUCCESS`,
  POST_COMMENT_ERROR: `POST_COMMENT_ERROR`
};

const initialState = {
  loadingComments: false,
  moviesComments: [],
  postCommentInProgress: false,
  postCommentError: false,
};

const Operation = {
  postCommentData: (commentData) => (dispatch, getState, api) => {
    return api.post(`/comments/${commentData.movieId}`, {
      rating: commentData.rating,
      comment: commentData.comment,
    })
    .then(() => {
      dispatch(ActionCreator.POST_COMMENT_SUCCESS);
    })
    .catch(() => {
      dispatch(ActionCreator.POST_COMMENT_ERROR);
    });
  }
};

const ActionCreator = {
  fetchMoviesCommentsData: () => ({
    type: ActionTypes.FETCH_MOVIES_COMMENTS_DATA,
  }),
  fetchMoviesCommentsDataSuccess: (moviesComments) => ({
    type: ActionTypes.FETCH_MOVIES_COMMENTS_DATA_SUCCESS,
    payload: moviesComments,
  }),
  postComment: () => ({
    type: ActionTypes.POST_COMMENT_IN_PROGRESS,
  }),
  postCommentSuccess: () => ({
    type: ActionTypes.POST_COMMENT_SUCCESS,
  }),
  postCommentError: () => ({
    type: ActionTypes.POST_COMMENT_ERROR,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIES_COMMENTS_DATA:
      return extendObject(state, {
        loadingComments: true,
      });
    case ActionTypes.FETCH_MOVIES_COMMENTS_DATA_SUCCESS:
      return extendObject(state, {
        loadingComments: false,
        moviesComments: state.moviesComments.concat(action.payload)
      });
    case ActionTypes.POST_COMMENT_IN_PROGRESS:
      return extendObject(state, {
        postCommentInProgress: true,
      });
    case ActionTypes.POST_COMMENT_SUCCESS:
      return extendObject(state, {
        postCommentInProgress: false,
      });
    case ActionTypes.POST_COMMENT_ERROR:
      return extendObject(state, {
        postCommentInProgress: false,
        postCommentError: true,
      });
    default:
      return state;
  }
};

export {ActionTypes, Operation, ActionCreator, reducer};
