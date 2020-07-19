import {extendObject} from '../../../utils/common.js';

const ActionTypes = {
  FETCH_MOVIES_COMMENTS_DATA: `FETCH_MOVIES_COMMENTS_DATA`,
  FETCH_MOVIES_COMMENTS_DATA_SUCCESS: `FETCH_MOVIES_COMMENTS_DATA_SUCCESS`,
  POST_COMMENT_IN_PROGRESS: `POST_COMMENT_IN_PROGRESS`
};

const initialState = {
  loadingComments: false,
  moviesComments: [],
};

const Operation = {
  postCommentData: (commentData) => (dispatch, getState, api) => {
    return api.post(`/comments/${commentData.movieId}`, {
      rating: commentData.rating,
      comment: commentData.comment,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
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
    default:
      return state;
  }
};

export {ActionTypes, Operation, ActionCreator, reducer};
