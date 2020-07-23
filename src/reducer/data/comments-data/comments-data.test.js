import {reducer, ActionCreator, ActionTypes} from './comments-data.js';

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
      postCommentSuccess: false,
    });
  });

  it(`Should reducer fetch comments data`, () => {
    expect(reducer({
      loadingComments: false,
      loadingCommentsError: false,
      moviesComments: {},
      postCommentInProgress: false,
      postCommentError: false,
      postCommentSuccess: false,
    }, {
      type: `FETCH_COMMENTS_DATA`,
    })).toEqual({
      loadingComments: true,
      loadingCommentsError: false,
      moviesComments: {},
      postCommentInProgress: false,
      postCommentError: false,
      postCommentSuccess: false,
    });
  });

  it(`Should reducer fetch comments data success`, () => {
    expect(reducer({
      loadingComments: true,
      loadingCommentsError: false,
      moviesComments: {},
      postCommentInProgress: false,
      postCommentError: false,
      postCommentSuccess: false,
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
      loadingCommentsError: false,
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
      postCommentInProgress: false,
      postCommentError: false,
      postCommentSuccess: false,
    });
  });

  it(`Should reducer fetch comments data error`, () => {
    expect(reducer({
      loadingComments: true,
      loadingCommentsError: false,
      moviesComments: {},
      postCommentInProgress: false,
      postCommentError: false,
      postCommentSuccess: false,
    }, {
      type: `FETCH_COMMENTS_DATA_ERROR`,
      payload: comments
    })).toEqual({
      loadingComments: false,
      loadingCommentsError: true,
      moviesComments: {},
      postCommentInProgress: false,
      postCommentError: false,
      postCommentSuccess: false,
    });
  });

  it(`Should reducer update comment post progress`, () => {
    expect(reducer({
      loadingComments: false,
      loadingCommentsError: false,
      moviesComments: {},
      postCommentInProgress: false,
      postCommentError: false,
      postCommentSuccess: false,
    }, {
      type: `POST_COMMENT_IN_PROGRESS`,
    })).toEqual({
      loadingComments: false,
      loadingCommentsError: false,
      moviesComments: {},
      postCommentInProgress: true,
      postCommentError: false,
      postCommentSuccess: false,
    });
  });

  it(`Should reducer update comment post error`, () => {
    expect(reducer({
      loadingComments: false,
      loadingCommentsError: false,
      moviesComments: {},
      postCommentInProgress: true,
      postCommentError: false,
      postCommentSuccess: false,
    }, {
      type: `POST_COMMENT_ERROR`,
    })).toEqual({
      loadingComments: false,
      loadingCommentsError: false,
      moviesComments: {},
      postCommentInProgress: false,
      postCommentError: true,
      postCommentSuccess: false,
    });
  });

  it(`Should reducer update comment post success`, () => {
    expect(reducer({
      loadingComments: false,
      loadingCommentsError: false,
      moviesComments: {},
      postCommentInProgress: true,
      postCommentError: false,
      postCommentSuccess: false,
    }, {
      type: `POST_COMMENT_SUCCESS`,
    })).toEqual({
      loadingComments: false,
      loadingCommentsError: false,
      moviesComments: {},
      postCommentInProgress: false,
      postCommentError: false,
      postCommentSuccess: true,
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

