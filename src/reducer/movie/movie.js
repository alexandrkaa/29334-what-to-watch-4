import {DEFAULT_GENRE, MOVIES_LIMIT} from '../../consts/consts.js';
import {extendObject, removeElementFromArray, addElementToArray} from '../../utils/common.js';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  moviesRenderLimit: MOVIES_LIMIT,
  userFavoriteList: [],
};

const ActionTypes = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  UPDATE_MOVIES_LIMIT: `UPDATE_MOVIES_LIMIT`,
  RESET_MOVIES_LIMIT: `RESET_MOVIES_LIMIT`,
  ADD_TO_USER_FAVORITE_LIST: `ADD_TO_USER_FAVORITE_LIST`,
  REMOVE_FROM_USER_FAVORITE_LIST: `REMOVE_FROM_USER_FAVORITE_LIST`,
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
  addToUserFavoriteList: (movieId) => ({
    type: ActionTypes.ADD_TO_USER_FAVORITE_LIST,
    payload: movieId,
  }),
  removeFromUserFavoriteList: (movieId) => ({
    type: ActionTypes.REMOVE_FROM_USER_FAVORITE_LIST,
    payload: movieId,
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
    case ActionTypes.RESET_MOVIES_LIMIT:
      return extendObject(state, {
        moviesRenderLimit: MOVIES_LIMIT,
      });
    case ActionTypes.ADD_TO_USER_FAVORITE_LIST:
      return extendObject(state, {
        userFavoriteList: addElementToArray(action.payload, state.userFavoriteList),
      });
    case ActionTypes.REMOVE_FROM_USER_FAVORITE_LIST:
      return extendObject(state, {
        userFavoriteList: removeElementFromArray(action.payload, state.userFavoriteList),
      });
    default:
      return state;
  }
};

export {ActionTypes, ActionCreator, reducer};
