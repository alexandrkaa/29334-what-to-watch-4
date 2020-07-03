import {DEFAULT_GENRE, MOVIES_LIMIT} from '../consts/consts.js';
import {extendObject} from '../utils/common.js';
import {titleMovie} from '../mocks/title-movie.js';
import moviesListServer, {movieGenres} from '../mocks/film.js';
import {getMoviesByGenre, getMoviesWithLimit} from '../utils/filters.js';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  moviesList: getMoviesWithLimit(getMoviesByGenre(moviesListServer, DEFAULT_GENRE), 0, MOVIES_LIMIT),
  titleMovie,
  movieGenres,
  moviesLimit: MOVIES_LIMIT,
  showMore: moviesListServer.length > MOVIES_LIMIT
};

const ActionTypes = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  GET_MOVIES_DATA_BY_GENRE: `GET_MOVIES_DATA_BY_GENRE`,
  UPDATE_LIMIT: `UPDATE_LIMIT`,
};

const ActionCreator = {
  changeActiveGenre: (movieGenre) => ({
    type: ActionTypes.CHANGE_ACTIVE_GENRE,
    payload: movieGenre,
  }),
  getMoviesDataByGenre: () => ({
    type: ActionTypes.GET_MOVIES_DATA_BY_GENRE,
  }),
  increaseMoviesLimit: () => ({
    type: ActionTypes.UPDATE_LIMIT,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_ACTIVE_GENRE:
      return extendObject(state, {
        activeGenre: action.payload,
        showMore: getMoviesByGenre(moviesListServer, action.payload).length > (state.moviesLimit)
      });
    case ActionTypes.GET_MOVIES_DATA_BY_GENRE:
      return extendObject(state, {
        moviesList: getMoviesWithLimit(getMoviesByGenre(moviesListServer, state.activeGenre), 0, state.moviesLimit)
      });
    case ActionTypes.UPDATE_LIMIT:
      return extendObject(state, {
        moviesLimit: (state.moviesLimit + MOVIES_LIMIT),
        showMore: getMoviesByGenre(moviesListServer, state.activeGenre).length > (state.moviesLimit)
      });
    default:
      return state;
  }
};

export {ActionTypes, ActionCreator, reducer};
