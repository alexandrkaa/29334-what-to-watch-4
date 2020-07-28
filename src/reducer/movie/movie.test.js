import {reducer, ActionCreator, ActionTypes} from './movie.js';
import {DEFAULT_GENRE, MOVIES_LIMIT} from '../../consts/consts.js';

describe(`MovieReducer works correctly`, () => {
  it(`MovieReducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      activeGenre: DEFAULT_GENRE,
      moviesRenderLimit: MOVIES_LIMIT,
    });
  });

  it(`Should MovieReducer change active genre`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
    }, ActionCreator.changeActiveGenre(`Horror`))).toEqual({
      activeGenre: `Horror`,
    });
  });

  it(`Should MovieReducer update movies limit`, () => {
    expect(reducer({
      moviesRenderLimit: MOVIES_LIMIT,
    }, ActionCreator.updateMoviesLimit(8))).toEqual({
      moviesRenderLimit: 16,
    });
  });

  it(`Should MovieReducer reset to default movies limit`, () => {
    expect(reducer({
      moviesRenderLimit: 24,
    }, ActionCreator.resetMoviesLimit())).toEqual({
      moviesRenderLimit: MOVIES_LIMIT,
    });
  });
});

describe(`Movie action creators work correctly`, () => {
  it(`Movie action creator for change active genre returns correct action`, () => {
    expect(ActionCreator.changeActiveGenre(`Horror`)).toEqual({
      type: ActionTypes.CHANGE_ACTIVE_GENRE,
      payload: `Horror`,
    });
  });

  it(`Movie action creator for update movies limit returns correct action`, () => {
    expect(ActionCreator.updateMoviesLimit(8)).toEqual({
      type: ActionTypes.UPDATE_MOVIES_LIMIT,
      payload: 8,
    });
  });

  it(`Movie action creator for reset movies limit returns correct action`, () => {
    expect(ActionCreator.resetMoviesLimit()).toEqual({
      type: ActionTypes.RESET_MOVIES_LIMIT,
    });
  });
});
