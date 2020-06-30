import {reducer, ActionCreator, ActionTypes} from "./reducer.js";
import {titleMovie} from '../mocks/title-movie.js';
import moviesList, {movieGenres} from '../mocks/film.js';
import {DEFAULT_GENRE} from '../consts/consts.js';
import {getMoviesByGenre} from '../utils/filters.js';

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      activeGenre: DEFAULT_GENRE,
      moviesList,
      titleMovie,
      movieGenres,
    });
  });

  it(`Should reducer change active genre`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
      moviesList,
      titleMovie,
      movieGenres,
    }, {
      type: `CHANGE_ACTIVE_GENRE`,
      payload: `Horror`
    })).toEqual({
      activeGenre: `Horror`,
      moviesList,
      titleMovie,
      movieGenres,
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
});
