import {reducer, ActionCreator, ActionTypes} from "./reducer.js";
import {titleMovie} from '../mocks/title-movie.js';
import moviesListServer, {movieGenres} from '../mocks/film.js';
import {DEFAULT_GENRE, MOVIES_LIMIT} from '../consts/consts.js';
import {getMoviesByGenre, getMoviesWithLimit} from '../utils/filters.js';

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      activeGenre: DEFAULT_GENRE,
      moviesList: getMoviesWithLimit(getMoviesByGenre(moviesListServer, DEFAULT_GENRE), 0, MOVIES_LIMIT),
      titleMovie,
      movieGenres,
      moviesLimit: MOVIES_LIMIT,
      showMore: moviesListServer.length > MOVIES_LIMIT
    });
  });

  it(`Should reducer change active genre`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
      moviesList: moviesListServer,
      movieGenres,
      moviesLimit: MOVIES_LIMIT,
      showMore: moviesListServer.length > MOVIES_LIMIT
    }, {
      type: `CHANGE_ACTIVE_GENRE`,
      payload: `Horror`
    })).toEqual({
      activeGenre: `Horror`,
      moviesList: moviesListServer,
      movieGenres,
      moviesLimit: MOVIES_LIMIT,
      showMore: getMoviesByGenre(moviesListServer, `Horror`).length > (MOVIES_LIMIT)
    });
  });

  it(`Should reducer get movies by active genre`, () => {
    const horrorMovies = getMoviesByGenre(moviesListServer, `Horror`);
    expect(reducer({
      activeGenre: `Horror`,
      moviesList: horrorMovies,
      movieGenres,
    }, {
      type: `GET_MOVIES_DATA_BY_GENRE`,
    })).toEqual({
      activeGenre: `Horror`,
      moviesList: horrorMovies,
      movieGenres,
    });
  });

  it(`Should reducer update limit`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
      moviesList: moviesListServer,
      movieGenres,
      moviesLimit: MOVIES_LIMIT,
      showMore: moviesListServer.length > MOVIES_LIMIT
    }, {
      type: `UPDATE_LIMIT`,
    })).toEqual({
      activeGenre: DEFAULT_GENRE,
      moviesList: moviesListServer,
      movieGenres,
      moviesLimit: MOVIES_LIMIT + MOVIES_LIMIT,
      showMore: moviesListServer.length > (MOVIES_LIMIT + MOVIES_LIMIT)
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

  it(`Action creator for gey movies by genre returns correct action`, () => {
    expect(ActionCreator.getMoviesDataByGenre()).toEqual({
      type: ActionTypes.GET_MOVIES_DATA_BY_GENRE,
    });
  });
});
