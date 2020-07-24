import {extendObject} from '../../../utils/common.js';
import commentAdapter from '../../../adapters/comments/comments-adapter.js';

const ActionTypes = {
  FETCH_COMMENTS_DATA: `FETCH_COMMENTS_DATA`,
  FETCH_COMMENTS_DATA_SUCCESS: `FETCH_COMMENTS_DATA_SUCCESS`,
  FETCH_COMMENTS_DATA_ERROR: `FETCH_COMMENTS_DATA_ERROR`,
  POST_COMMENT_IN_PROGRESS: `POST_COMMENT_IN_PROGRESS`,
  POST_COMMENT_SUCCESS: `POST_COMMENT_SUCCESS`,
  POST_COMMENT_ERROR: `POST_COMMENT_ERROR`,
};

const initialState = {
  loadingComments: false,
  loadingCommentsError: false,
  moviesComments: {},
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
      dispatch(ActionCreator.postCommentSuccess());
    })
    .catch(() => dispatch(ActionCreator.postCommentError()));
  },
  getCommentsData: (movieId) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`)
    .then((response) => {
      dispatch(ActionCreator.fetchCommentsDataSuccess({
        movieId,
        comments: response.data
      }));
    })
    .catch(() => {
      dispatch(ActionCreator.fetchCommentsDataError());
    });
  }
};

const ActionCreator = {
  fetchCommentsData: () => ({
    type: ActionTypes.FETCH_COMMENTS_DATA,
  }),
  fetchCommentsDataSuccess: (moviesComments) => ({
    type: ActionTypes.FETCH_COMMENTS_DATA_SUCCESS,
    payload: moviesComments,
  }),
  fetchCommentsDataError: () => ({
    type: ActionTypes.FETCH_COMMENTS_DATA_ERROR,
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
    case ActionTypes.FETCH_COMMENTS_DATA:
      return extendObject(state, {
        loadingComments: true,
        loadingCommentsError: false,
      });
    case ActionTypes.FETCH_COMMENTS_DATA_SUCCESS:
      const _curComments = JSON.parse(JSON.stringify(state.moviesComments));
      _curComments[action.payload.movieId] = action.payload.comments.map((comment) => commentAdapter(comment)) || [];
      return extendObject(state, {
        loadingComments: false,
        moviesComments: _curComments,
      });
    case ActionTypes.FETCH_COMMENTS_DATA_ERROR:
      return extendObject(state, {
        loadingComments: false,
        loadingCommentsError: true,
      });
    case ActionTypes.POST_COMMENT_IN_PROGRESS:
      return extendObject(state, {
        postCommentInProgress: true,
        postCommentError: false,
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
