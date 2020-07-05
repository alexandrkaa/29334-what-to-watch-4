import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from "../main/main.jsx";
import MovieCardFull from '../movie-card-full/movie-card-full.jsx';
import {MOVIES_LIKE_THIS_NUM, MovieCardFullTabsIds} from '../../consts/consts.js';
import {moviesListType, titleMovieType} from '../../types/types.js';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      movieId: null,
    };
  }
  _handleMovieTitleClick(movie, evt) {
    evt.preventDefault();
    this.setState({
      movieId: movie.id
    });
  }

  _renderApp() {
    const {titleMovie, moviesList, activeGenre} = this.props;
    if (this.state.movieId) {
      const [movie] = moviesList.filter((it) => it.id === +this.state.movieId);
      const moviesLikeThis = moviesList.filter((it) => it.movieGenre === movie.movieGenre).slice(0, MOVIES_LIKE_THIS_NUM - 1);
      return (
        <MovieCardFull
          movie={movie}
          moviesLikeThis={moviesLikeThis}
          activeItem={MovieCardFullTabsIds.OVERVIEW}
          onMovieTitleClick={this._handleMovieTitleClick.bind(this)}
        />
      );
    }
    return (
      <Main
        titleMovie={titleMovie}
        moviesList={moviesList}
        activeGenre={activeGenre}
        onMovieTitleClick={this._handleMovieTitleClick.bind(this)}
      />
    );
  }

  render() {
    const {moviesList} = this.props;
    const movie = moviesList[0];
    const moviesLikeThis = moviesList.filter((it) => it.movieGenre === movie.movieGenre).slice(0, MOVIES_LIKE_THIS_NUM - 1);

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie-card-full">
            <MovieCardFull
              movie={movie}
              moviesLikeThis={moviesLikeThis}
              activeItem={MovieCardFullTabsIds.OVERVIEW}
              onMovieTitleClick={this._handleMovieTitleClick.bind(this)}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  titleMovie: titleMovieType.isRequired,
  moviesList: moviesListType.isRequired,
  activeGenre: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    activeGenre: state.activeGenre,
    moviesList: state.moviesList,
    titleMovie: state.titleMovie,
  };
};

export {App};
export default connect(mapStateToProps)(App);
