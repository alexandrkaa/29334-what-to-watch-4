import {reducer, ActionCreator, ActionTypes} from './comments-data.js';

const comments = [{
  author: `Alessio Parkes`,
  date: `11.03.2009`,
  id: 1000,
  movieId: 1,
  rating: 4,
  text: `And all the clouds that lour'd upon our house. In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths Our bruised arms hung up for monuments Our stern alarums changed to merry meetings. Our dreadful marches to delightful measures Grim-visaged war hath smooth'd his wrinkled front And now, instead of mounting barded steeds. To fright the souls of fearful adversaries He capers nimbly in a lady's chamber. To the lascivious pleasing of a lute But I, that am not shaped for sportive tricks, Nor made to court an amorous looking-glass`
}, {
  author: `Jordi Joseph`,
  date: `11.03.2009`,
  id: 1000,
  movieId: 2,
  rating: 4,
  text: `And all the clouds that lour'd upon our house. In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths Our bruised arms hung up for monuments Our stern alarums changed to merry meetings. Our dreadful marches to delightful measures Grim-visaged war hath smooth'd his wrinkled front And now, instead of mounting barded steeds. To fright the souls of fearful adversaries He capers nimbly in a lady's chamber. To the lascivious pleasing of a lute`
}];

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      loadingComments: false,
      moviesComments: [],
      postCommentInProgress: false,
      postCommentError: false,
    });
  });

  it(`Should reducer fetch comments data`, () => {
    expect(reducer({
      loadingComments: false,
      moviesComments: [],
      postCommentInProgress: false,
      postCommentError: false,
    }, {
      type: `FETCH_MOVIES_COMMENTS_DATA`,
    })).toEqual({
      loadingComments: true,
      moviesComments: [],
      postCommentInProgress: false,
      postCommentError: false,
    });
  });

  it(`Should reducer fetch comments data success`, () => {
    expect(reducer({
      loadingComments: true,
      moviesComments: [],
      postCommentInProgress: false,
      postCommentError: false,
    }, {
      type: `FETCH_MOVIES_COMMENTS_DATA_SUCCESS`,
      payload: comments
    })).toEqual({
      loadingComments: false,
      moviesComments: comments,
      postCommentInProgress: false,
      postCommentError: false,
    });
  });

  it(`Should reducer update comment post progress`, () => {
    expect(reducer({
      loadingComments: false,
      moviesComments: [],
      postCommentInProgress: false,
      postCommentError: false,
    }, {
      type: `POST_COMMENT_IN_PROGRESS`,
    })).toEqual({
      loadingComments: false,
      moviesComments: [],
      postCommentInProgress: true,
      postCommentError: false,
    });
  });

  it(`Should reducer update comment post error`, () => {
    expect(reducer({
      loadingComments: false,
      moviesComments: [],
      postCommentInProgress: true,
      postCommentError: false,
    }, {
      type: `POST_COMMENT_ERROR`,
    })).toEqual({
      loadingComments: false,
      moviesComments: [],
      postCommentInProgress: false,
      postCommentError: true,
    });
  });

  it(`Should reducer update comment post success`, () => {
    expect(reducer({
      loadingComments: false,
      moviesComments: [],
      postCommentInProgress: true,
      postCommentError: false,
    }, {
      type: `POST_COMMENT_SUCCESS`,
    })).toEqual({
      loadingComments: false,
      moviesComments: [],
      postCommentInProgress: false,
      postCommentError: false,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator fetch movies comments data returns correct action`, () => {
    expect(ActionCreator.fetchMoviesCommentsData()).toEqual({
      type: ActionTypes.FETCH_MOVIES_COMMENTS_DATA,
    });
  });

  it(`Action creator fetch movies comments data success returns correct action`, () => {

    expect(ActionCreator.fetchMoviesCommentsDataSuccess(comments)).toEqual({
      type: ActionTypes.FETCH_MOVIES_COMMENTS_DATA_SUCCESS,
      payload: comments
    });
  });
});

