import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from "../main/main.jsx";
import MovieCardFull from '../movie-card-full/movie-card-full.jsx';
import {MOVIES_LIKE_THIS_NUM, MovieCardFullTabsIds} from '../../consts/consts.js';
import {moviesListType, titleMovieType} from '../../types/types.js';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';

const App = (props) => {
  const {onActiveItemChange, moviesList, titleMovie, activeGenre, activeItem: movieId} = props;

  const _renderApp = () => {
    if (movieId) {
      const [movie] = moviesList.filter((it) => it.id === +movieId);
      const moviesLikeThis = moviesList.filter((it) => it.movieGenre === movie.movieGenre).slice(0, MOVIES_LIKE_THIS_NUM - 1);
      return (
        <MovieCardFull
          movie={movie}
          moviesLikeThis={moviesLikeThis}
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
  }

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

App.propTypes = {
  titleMovie: titleMovieType.isRequired,
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
