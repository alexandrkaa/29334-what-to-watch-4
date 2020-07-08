import {DEFAULT_GENRE, MOVIES_LIMIT} from '../../consts/consts.js';
import {extendObject} from '../../utils/common.js';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  moviesRenderLimit: MOVIES_LIMIT,
};

const ActionTypes = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  UPDATE_MOVIES_LIMIT: `UPDATE_MOVIES_LIMIT`,
  RESET_MOVIES_LIMIT: `RESET_MOVIES_LIMIT`,
};

const ActionCreator = {
  changeActiveGenre: (movieGenre) => ({
    type: ActionTypes.CHANGE_ACTIVE_GENRE,
    payload: movieGenre,
  }),
  updateMoviesLimit: (moviesRenderLimit) => ({
    type: ActionTypes.UPDATE_MOVIES_LIMIT,
    payload: moviesRenderLimit,
  }),
  resetMoviesLimit: () => ({
    type: ActionTypes.RESET_MOVIES_LIMIT,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_ACTIVE_GENRE:
      return extendObject(state, {
        activeGenre: action.payload,
      });
    case ActionTypes.UPDATE_MOVIES_LIMIT:
      return extendObject(state, {
        moviesRenderLimit: (state.moviesRenderLimit + action.payload),
      });
    // TODO: добавить при переходе в др фильтр
    case ActionTypes.RESET_MOVIES_LIMIT:
      return extendObject(state, {
        moviesRenderLimit: MOVIES_LIMIT,
      });
    default:
      return state;
  }
};

export {ActionTypes, ActionCreator, reducer};
