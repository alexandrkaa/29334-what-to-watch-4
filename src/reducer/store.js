import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {ActionCreator as DataActionCreator, Operation as DataOperation} from '../reducer/data/data.js';
import createAPI from '../api/api.js';
import reducer from './reducer.js';

import {titleMovie, randomComments as moviesComments} from '../mocks/film.js';

const api = createAPI(() => {
  // store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(
    reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataActionCreator.fetchMoviesData());
// store.dispatch(DataActionCreator.fetchMoviesCommentsData());
store.dispatch(DataActionCreator.fetchTitleMovie());
// store.dispatch(DataActionCreator.fetchMoviesDataSuccess(moviesListServer));
store.dispatch(DataOperation.fetchMoviesData());

store.dispatch(DataActionCreator.fetchMoviesCommentsDataSuccess(moviesComments));
store.dispatch(DataActionCreator.fetchTitleMovieSuccess(titleMovie));

export default store;