import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getMovieByIdFilter} from '../../utils/filters.js';
import {moviesListType} from '../../types/types.js';
import Loader from '../../components/loader/loader.jsx';
import {getMovies, getMoviesLoadingStatus, hasUserLogined} from '../../reducer/selectors.js';
import {getSimilarMovies} from '../../utils/filters.js';
import cloneDeep from 'lodash.clonedeep';
import {Redirect} from 'react-router-dom';
import {AppRoutes} from '../../consts/consts.js';

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

      const childProps = cloneDeep(this.props);
      delete childProps.loadSimilarMovies;
      const {moviesList, movieId} = this.props;
      const movie = getMovieByIdFilter(moviesList, movieId);
      if (!movie) {
        return (
          <Redirect to={AppRoutes.MAIN_PAGE} />
        );
      }
      const similarMovies = loadSimilarMovies ? getSimilarMovies(moviesList, movie) : null;
      return (
        <Component
          movie={movie}
          videoSrc={movie.movieVideo}
          {...childProps}
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
      isAuthorized: hasUserLogined(state),
    };
  };

  return connect(mapStateToProps)(WithMovieHOC);
};

export default withMovie;
