import {DEFAULT_GENRE} from '../consts/consts.js';
import {extendObject} from '../utils/common.js';
import {titleMovie} from '../mocks/title-movie.js';
import moviesList, {movieGenres} from '../mocks/film.js';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  moviesList,
  titleMovie,
  movieGenres,
};

const ActionTypes = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
};

const ActionCreator = {
  changeActiveGenre: (movieGenre) => ({
    type: ActionTypes.CHANGE_ACTIVE_GENRE,
    payload: movieGenre,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_ACTIVE_GENRE:
      return extendObject(state, {
        activeGenre: action.payload
      });
    default:
      return state;
  }
};

export {ActionTypes, ActionCreator, reducer};
