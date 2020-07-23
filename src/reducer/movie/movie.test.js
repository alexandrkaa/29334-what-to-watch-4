import {reducer, ActionCreator, ActionTypes} from './movie.js';
import {DEFAULT_GENRE, MOVIES_LIMIT} from '../../consts/consts.js';

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      activeGenre: DEFAULT_GENRE,
      moviesRenderLimit: MOVIES_LIMIT,
      myList: [],
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

  it(`Should reducer add movie to mylist`, () => {
    expect(reducer({
      myList: [],
    }, {
      type: `ADD_TO_MYLIST`,
      payload: 1,
    })).toEqual({
      myList: [1],
    });
  });

  it(`Should reducer remove movie from mylist`, () => {
    expect(reducer({
      myList: [1, 3, 5],
    }, {
      type: `REMOVE_FROM_MYLIST`,
      payload: 3,
    })).toEqual({
      myList: [1, 5],
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

  it(`Action creator for add to mylist`, () => {
    expect(ActionCreator.addToMyList(2)).toEqual({
      type: ActionTypes.ADD_TO_MYLIST,
      payload: 2,
    });
  });

  it(`Action creator for remove from mylist`, () => {
    expect(ActionCreator.removeFromMyList(2)).toEqual({
      type: ActionTypes.REMOVE_FROM_MYLIST,
      payload: 2,
    });
  });
});
