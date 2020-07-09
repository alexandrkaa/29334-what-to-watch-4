import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from "../main/main.jsx";
import MovieCardFull from '../movie-card-full/movie-card-full.jsx';
import {MOVIES_LIKE_THIS_NUM, MovieCardFullTabsIds} from '../../consts/consts.js';
import {moviesListType, movieType} from '../../types/types.js';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';
import {getFilteredMovies, getTitleMovie, getMoviesLoadingStatus, getMoviesRenderLimit, getActiveGenre} from '../../reducer/selectors.js';
import {DEFAULT_GENRE} from '../../consts/consts.js';

const App = (props) => {
  const {onActiveItemChange, moviesList, titleMovie, activeGenre, activeItem: movieId, moviesRenderLimit, loadingMovies} = props;

  const _renderApp = () => {
    if (!loadingMovies) {
      if (movieId) {
        const [movie] = moviesList.filter((it) => it.id === +movieId);
        const similarMovies = moviesList.filter((it) => it.movieGenre === movie.movieGenre && it.id !== movie.id).slice(0, MOVIES_LIKE_THIS_NUM - 1);
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
          moviesRenderLimit={moviesRenderLimit}
        />
      );
    }
    return (
      <h1>Loading...</h1>
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {_renderApp()}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.defaultProps = {
  activeGenre: DEFAULT_GENRE,
};

App.propTypes = {
  titleMovie: movieType.isRequired,
  moviesList: moviesListType.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  activeItem: PropTypes.number,
  moviesRenderLimit: PropTypes.number.isRequired,
  loadingMovies: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    activeGenre: getActiveGenre(state),
    moviesList: getFilteredMovies(state),
    titleMovie: getTitleMovie(state),
    moviesRenderLimit: getMoviesRenderLimit(state),
    loadingMovies: getMoviesLoadingStatus(state),
  };
};

export {App};
const WrappedApp = withActiveItem(App);
export default connect(mapStateToProps)(WrappedApp);
