import {DEFAULT_GENRE} from '../consts/consts.js';
import {extendObject} from '../utils/common.js';
import {titleMovie} from '../mocks/title-movie.js';
import moviesListServer, {movieGenres} from '../mocks/film.js';
import {getMoviesByGenre} from '../utils/filters.js';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  moviesList: getMoviesByGenre(moviesListServer, DEFAULT_GENRE),
  titleMovie,
  movieGenres,
};

const ActionTypes = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  GET_MOVIES_DATA_BY_GENRE: `GET_MOVIES_DATA_BY_GENRE`,
};

const ActionCreator = {
  changeActiveGenre: (movieGenre) => ({
    type: ActionTypes.CHANGE_ACTIVE_GENRE,
    payload: movieGenre,
  }),
  getMoviesDataByGenre: () => ({
    type: ActionTypes.GET_MOVIES_DATA_BY_GENRE,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_ACTIVE_GENRE:
      return extendObject(state, {
        activeGenre: action.payload
      });
    case ActionTypes.GET_MOVIES_DATA_BY_GENRE:
      return extendObject(state, {
        moviesList: getMoviesByGenre(moviesListServer, state.activeGenre)
      });
    default:
      return state;
  }
};

export {ActionTypes, ActionCreator, reducer};
