import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from "../main/main.jsx";
import MovieCardFull from '../movie-card-full/movie-card-full.jsx';
import {MOVIES_LIKE_THIS_NUM, MovieCardFullTabsIds} from '../../consts/consts.js';
import {moviesListType, movieType} from '../../types/types.js';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';

import FullScreenVideoPlayer from '../full-screen-video-player/full-screen-video-player.jsx';

const App = (props) => {
  const {onActiveItemChange, moviesList, titleMovie, activeGenre, activeItem: movieId} = props;

  const _renderApp = () => {

    if (movieId) {
      const [movie] = moviesList.filter((it) => it.id === +movieId);
      const similarMovies = moviesList.filter((it) => it.movieGenre === movie.movieGenre).slice(0, MOVIES_LIKE_THIS_NUM - 1);
      return (
        <MovieCardFull
          movie={movie}
          similarMovies={similarMovies}
          activeItem={MovieCardFullTabsIds.OVERVIEW}
          onMovieTitleClick={onActiveItemChange}
        />
      );
    }
    return (
      <Main
        titleMovie={titleMovie}
        moviesList={moviesList}
        activeGenre={activeGenre}
        onMovieTitleClick={onActiveItemChange}
      />
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {_renderApp()}
        </Route>
        <Route exact path={`/player/id:${titleMovie.id}`}>
          <FullScreenVideoPlayer
            movie={moviesList[0]}
            isMuted={true}
            videoWidth="100%"
            videoHeight="100%"
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  titleMovie: movieType.isRequired,
  moviesList: moviesListType.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  activeItem: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    activeGenre: state.activeGenre,
    moviesList: state.moviesList,
    titleMovie: state.titleMovie,
  };
};

export {App};
const WrappedApp = withActiveItem(App);
export default connect(mapStateToProps)(WrappedApp);
