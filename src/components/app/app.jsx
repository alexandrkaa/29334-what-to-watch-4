import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import MovieCardFull from '../movie-card-full/movie-card-full.jsx';
import {MovieCardFullTabsIds} from '../../consts/consts.js';
import FullScreenVideoPlayer from '../full-screen-video-player/full-screen-video-player.jsx';
import withMovie from '../../hocs/with-movie/with-movie.js';
import SignIn from '../sign-in/sign-in.jsx';

const WithMovieFullScreenVideoPlayer = withMovie(FullScreenVideoPlayer);
const WithMovieMovieCardFull = withMovie(MovieCardFull);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/player/:id" render={
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
        <Route exact path="/films/:id" render={
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
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
