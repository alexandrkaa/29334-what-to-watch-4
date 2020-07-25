import {extendObject} from '../../../utils/common.js';
import movieAdapter from '../../../adapters/movie/movie-adapter.js';
import cloneDeep from 'lodash.clonedeep';

const ActionTypes = {
  FETCH_MOVIES_DATA: `FETCH_MOVIES_DATA`,
  FETCH_MOVIES_DATA_SUCCESS: `FETCH_MOVIES_DATA_SUCCESS`,
  FETCH_MOVIES_DATA_ERROR: `FETCH_MOVIES_DATA_ERROR`,
  FETCH_TITLE_MOVIE: `FETCH_TITLE_MOVIE`,
  FETCH_TITLE_MOVIE_SUCCESS: `FETCH_TITLE_MOVIE_SUCCESS`,
  FETCH_USER_FAVORITE_LIST: `FETCH_USER_FAVORITE_LIST`,
  FETCH_USER_FAVORITE_LIST_SUCCESS: `FETCH_USER_FAVORITE_LIST_SUCCESS`,
  FETCH_USER_FAVORITE_LIST_ERROR: `FETCH_USER_FAVORITE_LIST_ERROR`,
};

const initialState = {
  loadingMovies: false,
  loadingMoviesError: false,
  loadingTitleMovie: false,
  moviesList: [],
  titleMovie: {},
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

  fetchUserFavoriteList: () => ({
    type: ActionTypes.FETCH_USER_FAVORITE_LIST,
  }),
  fetchUserFavoriteListSuccess: (userFavoriteList) => ({
    type: ActionTypes.FETCH_USER_FAVORITE_LIST_SUCCESS,
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
  getUserFavoriteListData: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
    .then((response) => {
      dispatch(ActionCreator.fetchUserFavoriteListSuccess(response.data.map((movie) => movieAdapter(movie))));
    })
    .catch((err) => {
      console.log(err);
    });
  },
  postToUserFavoriteList: () => (dispatch, getState, api) => {
    return api.post(`/favorite/2/1`)
    .then((response) => {
      // console.log(response.data);
      // dispatch(ActionCreator.fetchUserFavoriteListSuccess(response.data));
    })
    .catch((err) => {
      console.log(err);
    });
  }
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
      });
    case ActionTypes.FETCH_TITLE_MOVIE_SUCCESS:
      return extendObject(state, {
        loadingTitleMovie: false,
        titleMovie: action.payload
      });

    case ActionTypes.FETCH_USER_FAVORITE_LIST:
      return extendObject(state, {
        loadingUserFavoriteList: true,
      });
    case ActionTypes.FETCH_USER_FAVORITE_LIST_SUCCESS:
      const userFavoriteIds = action.payload.map((movie) => (movie.id));
      return extendObject(state, {
        loadingUserFavoriteList: false,
        moviesList: state.moviesList.map((movie) => {
          if (userFavoriteIds.includes(movie.id)) {
            return action.payload.find((it) => (it.id === movie.id));
          }
          return movie;
        }),
      });
    default:
      return state;
  }
};

export {ActionTypes, Operation, ActionCreator, reducer};
