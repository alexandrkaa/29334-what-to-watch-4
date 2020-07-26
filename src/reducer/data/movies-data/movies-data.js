import {extendObject, updateMovieIsFavorite} from '../../../utils/common.js';
import movieAdapter from '../../../adapters/movie/movie-adapter.js';
import cloneDeep from 'lodash.clonedeep';

const ActionTypes = {
  FETCH_MOVIES_DATA: `FETCH_MOVIES_DATA`,
  FETCH_MOVIES_DATA_SUCCESS: `FETCH_MOVIES_DATA_SUCCESS`,
  FETCH_MOVIES_DATA_ERROR: `FETCH_MOVIES_DATA_ERROR`,

  FETCH_TITLE_MOVIE: `FETCH_TITLE_MOVIE`,
  FETCH_TITLE_MOVIE_SUCCESS: `FETCH_TITLE_MOVIE_SUCCESS`,
  FETCH_TITLE_MOVIE_ERROR: `FETCH_TITLE_MOVIE_ERROR`,

  FETCH_USER_FAVORITE_LIST: `FETCH_USER_FAVORITE_LIST`,
  UPDATE_USER_FAVORITE_LIST_SUCCESS: `UPDATE_USER_FAVORITE_LIST_SUCCESS`,
  UPDATE_USER_FAVORITE_LIST_ERROR: `UPDATE_USER_FAVORITE_LIST_ERROR`,
};

const initialState = {
  loadingMovies: false,
  loadingMoviesError: false,
  moviesList: [],
  loadingTitleMovie: false,
  loadingTitleMovieError: false,
  titleMovie: {},
  updateUserFavoriteListError: false,
};

const ActionCreator = {
  fetchMoviesData: () => ({
    type: ActionTypes.FETCH_MOVIES_DATA,
  }),
  fetchMoviesDataSuccess: (moviesList) => ({
    type: ActionTypes.FETCH_MOVIES_DATA_SUCCESS,
    payload: moviesList,
  }),
  fetchMoviesDataError: () => ({
    type: ActionTypes.FETCH_MOVIES_DATA_ERROR,
  }),

  fetchTitleMovie: () => ({
    type: ActionTypes.FETCH_TITLE_MOVIE,
  }),
  fetchTitleMovieSuccess: (titleMovie) => ({
    type: ActionTypes.FETCH_TITLE_MOVIE_SUCCESS,
    payload: titleMovie,
  }),
  fetchTitleMovieError: () => ({
    type: ActionTypes.FETCH_TITLE_MOVIE_ERROR,
  }),

  fetchUserFavoriteList: () => ({
    type: ActionTypes.FETCH_USER_FAVORITE_LIST,
  }),
  updateUserFavoriteListSuccess: (userFavoriteList) => ({
    type: ActionTypes.UPDATE_USER_FAVORITE_LIST_SUCCESS,
    payload: userFavoriteList,
  }),
  updateUserFavoriteListError: (userFavoriteList) => ({
    type: ActionTypes.UPDATE_USER_FAVORITE_LIST_ERROR,
    payload: userFavoriteList,
  }),

};

const Operation = {
  fetchMoviesData: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.fetchMoviesDataSuccess(response.data.map((movie) => movieAdapter(movie))));
      }).catch((response) => {
        dispatch(ActionCreator.fetchMoviesDataError(response));
      });
  },

  fetchTitleMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.fetchTitleMovieSuccess(movieAdapter(response.data)));
      }).catch((response) => {
        dispatch(ActionCreator.fetchTitleMovieError(response));
      });
  },

  fetchUserFavoriteListData: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
    .then((response) => {
      dispatch(ActionCreator.updateUserFavoriteListSuccess(response.data.map((movie) => movieAdapter(movie))));
    })
    .catch((err) => {
      dispatch(ActionCreator.updateUserFavoriteListError(err));
    });
  },
  postToUserFavoriteList: (movieId) => (dispatch, getState, api) => {
    return api.post(`/favorite/${movieId}/1`)
    .then((response) => {
      dispatch(ActionCreator.updateUserFavoriteListSuccess([movieAdapter(response.data)]));
    })
    .catch((err) => {
      dispatch(ActionCreator.updateUserFavoriteListError(err));
    });
  },
  removeFromUserFavoriteList: (movieId) => (dispatch, getState, api) => {
    return api.post(`/favorite/${movieId}/0`)
    .then((response) => {
      dispatch(ActionCreator.updateUserFavoriteListSuccess([movieAdapter(response.data)]));
    })
    .catch((err) => {
      dispatch(ActionCreator.updateUserFavoriteListError(err));
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIES_DATA:
      return extendObject(state, {
        loadingMovies: true,
      });
    case ActionTypes.FETCH_MOVIES_DATA_SUCCESS:
      return extendObject(state, {
        loadingMovies: false,
        moviesList: action.payload
      });
    case ActionTypes.FETCH_MOVIES_DATA_ERROR:
      return extendObject(state, {
        loadingMoviesError: true,
      });

    case ActionTypes.FETCH_TITLE_MOVIE:
      return extendObject(state, {
        loadingTitleMovie: true,
        loadingTitleMovieError: false,
      });
    case ActionTypes.FETCH_TITLE_MOVIE_SUCCESS:
      return extendObject(state, {
        loadingTitleMovie: false,
        titleMovie: action.payload
      });
    case ActionTypes.FETCH_TITLE_MOVIE_ERROR:
      return extendObject(state, {
        loadingTitleMovie: false,
        loadingTitleMovieError: true,
      });

    case ActionTypes.FETCH_USER_FAVORITE_LIST:
      return extendObject(state, {
        loadingUserFavoriteList: true,
        updateUserFavoriteListError: false,
      });
    case ActionTypes.UPDATE_USER_FAVORITE_LIST_SUCCESS:
      return extendObject(state, {
        loadingUserFavoriteList: false,
        moviesList: updateMovieIsFavorite(cloneDeep(state.moviesList), action.payload)
      });
    default:
      return state;
  }
};

export {ActionTypes, Operation, ActionCreator, reducer};
