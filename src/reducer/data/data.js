import {extendObject} from '../../utils/common.js';

const ActionTypes = {
  FETCH_MOVIES_DATA: `FETCH_MOVIES_DATA`,
  FETCH_MOVIES_DATA_SUCCESS: `FETCH_MOVIES_DATA_SUCCESS`,
  FETCH_TITLE_MOVIE: `FETCH_TITLE_MOVIE`,
  FETCH_TITLE_MOVIE_SUCCESS: `FETCH_TITLE_MOVIE_SUCCESS`,
  FETCH_MOVIES_COMMENTS_DATA: `FETCH_MOVIES_COMMENTS_DATA`,
  FETCH_MOVIES_COMMENTS_DATA_SUCCESS: `FETCH_MOVIES_COMMENTS_DATA_SUCCESS`,
};

const initialState = {
  loadingMovies: false,
  loadingComments: false,
  loadingTitleMovie: false,
  moviesList: [],
  titleMovie: {},
  moviesComments: [],
};

const ActionCreator = {
  fetchMoviesData: () => ({
    type: ActionTypes.FETCH_MOVIES_DATA,
  }),
  fetchMoviesDataSuccess: (moviesList) => ({
    type: ActionTypes.FETCH_MOVIES_DATA_SUCCESS,
    payload: moviesList,
  }),
  fetchMoviesCommentsData: () => ({
    type: ActionTypes.FETCH_MOVIES_COMMENTS_DATA,
  }),
  fetchMoviesCommentsDataSuccess: (moviesComments) => ({
    type: ActionTypes.FETCH_MOVIES_COMMENTS_DATA_SUCCESS,
    payload: moviesComments,
  }),
  fetchTitleMovie: () => ({
    type: ActionTypes.FETCH_TITLE_MOVIE,
  }),
  fetchTitleMovieSuccess: (titleMovie) => ({
    type: ActionTypes.FETCH_TITLE_MOVIE_SUCCESS,
    payload: titleMovie,
  }),
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
    case ActionTypes.FETCH_MOVIES_COMMENTS_DATA:
      return extendObject(state, {
        loadingComments: true,
      });
    case ActionTypes.FETCH_MOVIES_COMMENTS_DATA_SUCCESS:
      return extendObject(state, {
        loadingComments: false,
        moviesComments: action.payload
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
    default:
      return state;
  }
};

export {ActionTypes, ActionCreator, reducer};
