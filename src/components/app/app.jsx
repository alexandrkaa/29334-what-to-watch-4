import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "../main/main.jsx";
import MovieCardFull from '../movie-card-full/movie-card-full.jsx';

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
      return (
        <MovieCardFull
          movie={movie}
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
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie-card-full">
            <MovieCardFull
              movie={moviesList[0]}
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
