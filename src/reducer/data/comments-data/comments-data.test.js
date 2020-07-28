import {reducer, ActionCreator, ActionTypes, Operation} from './comments-data.js';
import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../../api/api.js';

const api = createAPI(() => {});

const comments = {
  3: [
    {
      id: 1,
      author: {
        id: 4,
        name: `Kate Muir`
      },
      rating: 8.9,
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      date: `2019-05-08T14:13:56.569Z`
    }
  ],
};

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      loadingComments: false,
      loadingCommentsError: false,
      moviesComments: {},
      postCommentInProgress: false,
      postCommentError: false,
    });
  });

  it(`Should reducer fetch comments data`, () => {
    expect(reducer({
      loadingComments: false,
      loadingCommentsError: false,
    }, {
      type: `FETCH_COMMENTS_DATA`,
    })).toEqual({
      loadingComments: true,
      loadingCommentsError: false,
    });
  });

  it(`Should reducer fetch comments data success`, () => {
    expect(reducer({
      loadingComments: true,
      moviesComments: {},
    }, {
      type: `FETCH_COMMENTS_DATA_SUCCESS`,
      payload: {
        movieId: 3,
        comments: [{
          id: 2,
          user: {
            id: 4,
            name: `Kate Muir`
          },
          rating: 9,
          comment: `Comment text`,
          date: `2019-01-08T14:13:56.569Z`
        }]
      }
    })).toEqual({
      loadingComments: false,
      moviesComments: {
        3: [{
          id: 2,
          author: {
            id: 4,
            name: `Kate Muir`
          },
          rating: 9,
          text: `Comment text`,
          date: `2019-01-08T14:13:56.569Z`
        }]
      },
    });
  });

  it(`Should reducer fetch comments data error`, () => {
    expect(reducer({
      loadingComments: true,
      loadingCommentsError: false,
    }, {
      type: `FETCH_COMMENTS_DATA_ERROR`,
      payload: comments
    })).toEqual({
      loadingComments: false,
      loadingCommentsError: true,
    });
  });

  it(`Should reducer update comment post progress`, () => {
    expect(reducer({
      postCommentInProgress: false,
      postCommentError: false,
    }, {
      type: `POST_COMMENT_IN_PROGRESS`,
    })).toEqual({
      postCommentInProgress: true,
      postCommentError: false,
    });
  });

  it(`Should reducer update comment post error`, () => {
    expect(reducer({
      postCommentInProgress: true,
      postCommentError: false,
    }, {
      type: `POST_COMMENT_ERROR`,
    })).toEqual({
      postCommentInProgress: false,
      postCommentError: true,
    });
  });

  it(`Should reducer update comment post success`, () => {
    expect(reducer({
      postCommentInProgress: true,
    }, {
      type: `POST_COMMENT_SUCCESS`,
    })).toEqual({
      postCommentInProgress: false,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator fetch movies comments data returns correct action`, () => {
    expect(ActionCreator.fetchCommentsData()).toEqual({
      type: ActionTypes.FETCH_COMMENTS_DATA,
    });
  });

  it(`Action creator fetch movies comments data success returns correct action`, () => {

    expect(ActionCreator.fetchCommentsDataSuccess(comments)).toEqual({
      type: ActionTypes.FETCH_COMMENTS_DATA_SUCCESS,
      payload: comments
    });
  });

  it(`Action creator fetch movies comments data returns correct action`, () => {
    expect(ActionCreator.fetchCommentsDataError()).toEqual({
      type: ActionTypes.FETCH_COMMENTS_DATA_ERROR,
    });
  });
});

describe(`CommentsData Operation works correctly`, () => {
  it(`Operation get comments data works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieId = 3;
    const commentsLoader = Operation.getCommentsData(movieId);

    apiMock
      .onGet(`/comments/${movieId}`)
      .reply(200, comments[3]);

    return commentsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionTypes.FETCH_COMMENTS_DATA_SUCCESS,
        payload: {
          movieId,
          comments: comments[3]
        },
      });
    });
  });

  it(`Operation post comments data works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieId = 3;
    const commentsLoader = Operation.postCommentData({
      movieId,
      rating: 5,
      comment: `Some comment text`,
    });

    apiMock
      .onPost(`/comments/${movieId}`)
      .reply(200, comments[3]);

    return commentsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});

