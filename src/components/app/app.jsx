import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "../main/main.jsx";
import MovieCardFull from '../movie-card-full/movie-card-full.jsx';
import {MOVIES_LIKE_THIS_NUM, MovieCardFullTabsIds} from '../../consts/consts.js';

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
    const {titleMovie, moviesList} = this.props;
    if (this.state.movieId) {
      const movie = moviesList.filter((it) => it.id === +this.state.movieId)[0];
      const moviesLikeThis = moviesList.filter((it) => it.movieGenre === movie.movieGenre).slice(0, MOVIES_LIKE_THIS_NUM - 1);
      return (
        <MovieCardFull
          movie={movie}
          moviesLikeThis={moviesLikeThis}
          activeTab={MovieCardFullTabsIds.OVERVIEW}
          onMovieTitleClick={this._handleMovieTitleClick.bind(this)}
        />
      );
    }
    return (
      <Main
        titleMovie={titleMovie}
        moviesList={moviesList}
        onMovieTitleClick={this._handleMovieTitleClick.bind(this)}
      />
    );
  }

  render() {
    const {moviesList} = this.props;
    // для тестирования
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
              activeTab={MovieCardFullTabsIds.OVERVIEW}
              onMovieTitleClick={this._handleMovieTitleClick.bind(this)}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  titleMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  }).isRequired,
  moviesList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        movieBackground: PropTypes.string.isRequired,
        movieGenre: PropTypes.string.isRequired,
        movieDate: PropTypes.string.isRequired,
        movieImage: PropTypes.string.isRequired,
        movieRatingScore: PropTypes.string.isRequired,
        movieRatingLevel: PropTypes.string.isRequired,
        movieRatingCount: PropTypes.string.isRequired,
        movieDirector: PropTypes.string.isRequired,
        movieStarring: PropTypes.string.isRequired,
        movieDescription: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ),
      })).isRequired,
};

export default App;
