// import {createStore, applyMiddleware, compose} from 'redux';
import {createStore} from 'redux';
import {ActionCreator as DataActionCreator} from '../reducer/data/data.js';
import reducer from './reducer.js';
import moviesListServer, {titleMovie, randomComments as moviesComments} from '../mocks/film.js';
// console.log(titleMovie);
// import thunk from 'redux-thunk';
// import createAPI from './api/api.js';

// const api = createAPI(() => {
//   store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
// });

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    // compose(
    //     applyMiddleware(thunk.withExtraArgument(api)),
    //     window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    // )
);

store.dispatch(DataActionCreator.fetchMoviesData());
// store.dispatch(DataActionCreator.fetchMoviesCommentsData());
store.dispatch(DataActionCreator.fetchTitleMovie());
store.dispatch(DataActionCreator.fetchMoviesDataSuccess(moviesListServer));
// store.dispatch(DataActionCreator.fetchMoviesCommentsDataSuccess(moviesComments));
store.dispatch(DataActionCreator.fetchTitleMovieSuccess(titleMovie));
// console.log(store.getState());

export default store;
