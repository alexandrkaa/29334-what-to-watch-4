import {reducer, ActionCreator, ActionTypes} from './movie.js';
import {DEFAULT_GENRE, MOVIES_LIMIT} from '../../consts/consts.js';

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      activeGenre: DEFAULT_GENRE,
      moviesRenderLimit: MOVIES_LIMIT,
      userFavoriteList: [],
    });
  });

  it(`Should reducer change active genre`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
    }, {
      type: `CHANGE_ACTIVE_GENRE`,
      payload: `Horror`,
    })).toEqual({
      activeGenre: `Horror`,
    });
  });

  it(`Should reducer update movies limit`, () => {
    expect(reducer({
      moviesRenderLimit: MOVIES_LIMIT,
    }, {
      type: `UPDATE_MOVIES_LIMIT`,
      payload: 8,
    })).toEqual({
      moviesRenderLimit: 16,
    });
  });

  it(`Should reducer reset to default movies limit`, () => {
    expect(reducer({
      moviesRenderLimit: 24,
    }, {
      type: `RESET_MOVIES_LIMIT`,
      payload: 8,
    })).toEqual({
      moviesRenderLimit: MOVIES_LIMIT,
    });
  });

  it(`Should reducer add movie to userFavoriteList`, () => {
    expect(reducer({
      userFavoriteList: [],
    }, {
      type: `ADD_TO_USER_FAVORITE_LIST`,
      payload: 1,
    })).toEqual({
      userFavoriteList: [1],
    });
  });

  it(`Should reducer remove movie from userFavoriteList`, () => {
    expect(reducer({
      userFavoriteList: [1, 3, 5],
    }, {
      type: `REMOVE_FROM_USER_FAVORITE_LIST`,
      payload: 3,
    })).toEqual({
      userFavoriteList: [1, 5],
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change active genre returns correct action`, () => {
    expect(ActionCreator.changeActiveGenre(`Horror`)).toEqual({
      type: ActionTypes.CHANGE_ACTIVE_GENRE,
      payload: `Horror`,
    });
  });

  it(`Action creator for update movies limit returns correct action`, () => {
    expect(ActionCreator.updateMoviesLimit(2)).toEqual({
      type: ActionTypes.UPDATE_MOVIES_LIMIT,
      payload: 2,
    });
  });

  it(`Action creator for update movies limit returns correct action`, () => {
    expect(ActionCreator.resetMoviesLimit()).toEqual({
      type: ActionTypes.RESET_MOVIES_LIMIT,
    });
  });

  it(`Action creator for add to userFavoriteList`, () => {
    expect(ActionCreator.addToUserFavoriteList(2)).toEqual({
      type: ActionTypes.ADD_TO_USER_FAVORITE_LIST,
      payload: 2,
    });
  });

  it(`Action creator for remove from userFavoriteList`, () => {
    expect(ActionCreator.removeFromUserFavoriteList(2)).toEqual({
      type: ActionTypes.REMOVE_FROM_USER_FAVORITE_LIST,
      payload: 2,
    });
  });
});
