import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {ActionCreator as MoviesDataActionCreator, Operation as MoviesDataOperation} from '../reducer/data/movies-data/movies-data.js';
// import {ActionCreator as CommentsDataActionCreator} from '../reducer/data/comments-data/comments-data.js';
import {ActionCreator as UserActionCreator, AuthorizationStatus, Operation as UserOperation} from '../reducer/user/user.js';
import createAPI from '../api/api.js';
import reducer from './reducer.js';

import {titleMovie, randomComments as moviesComments} from '../mocks/film.js';

const api = createAPI(
    () => {
      store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
    }
);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__({trace: true, traceLimit: 25}) : (f) => f
    )
);

store.dispatch(UserOperation.checkAuth());

store.dispatch(MoviesDataActionCreator.fetchMoviesData());
store.dispatch(MoviesDataActionCreator.fetchTitleMovie());

store.dispatch(MoviesDataActionCreator.fetchTitleMovieSuccess(titleMovie));
store.dispatch(MoviesDataOperation.fetchMoviesData());

// store.dispatch(CommentsDataActionCreator.fetchCommentsData());
// // store.dispatch(CommentsDataActionCreator.fetchCommentsDataSuccess(moviesComments));
// store.dispatch(CommentsOperation.getCommentsData(1));

export default store;
