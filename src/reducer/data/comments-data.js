import {extendObject} from '../../utils/common.js';

const ActionTypes = {
  FETCH_MOVIES_COMMENTS_DATA: `FETCH_MOVIES_COMMENTS_DATA`,
  FETCH_MOVIES_COMMENTS_DATA_SUCCESS: `FETCH_MOVIES_COMMENTS_DATA_SUCCESS`,
  POST_COMMENT_IN_PROGRESS: `POST_COMMENT_IN_PROGRESS`
};

const Operation = {
  postCommentData: (movieId) => (dispatch, getState, api) => {
    return api.post(`//comments/${movieId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
