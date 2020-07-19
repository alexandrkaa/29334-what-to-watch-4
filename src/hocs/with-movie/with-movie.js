import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getMovieById} from '../../utils/filters.js';
import {moviesListType} from '../../types/types.js';
import Loader from '../../components/loader/loader.jsx';
import {getMovies, getMoviesLoadingStatus} from '../../reducer/selectors.js';
import {getSimilarMovies} from '../../utils/filters.js';

const withMovie = (Component) => {
  class WithMovieHOC extends PureComponent {
    constructor(props) {
      super(props);
    }
    render() {
      const {loadingMovies, loadSimilarMovies} = this.props;
      if (loadingMovies) {
        return <Loader />;
      }

      const {moviesList, movieId} = this.props;
      const movie = getMovieById(moviesList, movieId);
      const similarMovies = loadSimilarMovies ? getSimilarMovies(moviesList, movie) : null;
      return (
        <Component
          movie={movie}
          videoSrc={movie.movieVideo}
          {...this.props}
          similarMovies={similarMovies}
        />
      );
    }
  }

  WithMovieHOC.propTypes = {
    movieId: PropTypes.number.isRequired,
    moviesList: moviesListType.isRequired,
    loadingMovies: PropTypes.bool.isRequired,
    loadSimilarMovies: PropTypes.bool.isRequired,
  };

  WithMovieHOC.defaultProps = {
    loadSimilarMovies: false,
  };

  const mapStateToProps = (state) => {
    return {
      moviesList: getMovies(state),
      loadingMovies: getMoviesLoadingStatus(state),
    };
  };

  return connect(mapStateToProps)(WithMovieHOC);
};

export default withMovie;