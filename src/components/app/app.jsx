import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import MovieCardFull from '../movie-card-full/movie-card-full.jsx';
import {MovieCardFullTabsIds, AppRoutes} from '../../consts/consts.js';
import FullScreenVideoPlayer from '../full-screen-video-player/full-screen-video-player.jsx';
import withMovie from '../../hocs/with-movie/with-movie.js';
import SignIn from '../sign-in/sign-in.jsx';
import AddComment from '../add-comment/add-comment.jsx';

const WithMovieFullScreenVideoPlayer = withMovie(FullScreenVideoPlayer);
const WithMovieMovieCardFull = withMovie(MovieCardFull);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${AppRoutes.FULL_PLAYER_PAGE}/:id`} render={
          (routeProps) => {
            return (
              <WithMovieFullScreenVideoPlayer
                movieId={parseInt(routeProps.match.params.id, 10)}
                isMuted={false}
                videoWidth="100%"
                videoHeight="100%"
                {...routeProps}
              />
            );
          }
        } />
        <Route exact path={`${AppRoutes.FILM_PAGE}/:id${AppRoutes.REVIEW_PAGE}`} render={
          (routeProps) => {
            return (
              <AddComment
                movieId={parseInt(routeProps.match.params.id, 10)}
                {...routeProps}
              />
            );
          }
        } />
        <Route exact path={`${AppRoutes.FILM_PAGE}/:id`} render={
          (routeProps) => {
            return (
              <WithMovieMovieCardFull
                movieId={parseInt(routeProps.match.params.id, 10)}
                loadSimilarMovies={true}
                {...routeProps}
                activeItem={MovieCardFullTabsIds.OVERVIEW}
              />
            );
          }
        } />
        <Route exact path={AppRoutes.LOGIN_PAGE} component={SignIn} />
        <Route exact path={AppRoutes.MAIN_PAGE} component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
