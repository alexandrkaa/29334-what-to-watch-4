import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../movie-list/movie-list.jsx';
import GenreFilterList from '../genre-filter-list/genre-filter-list.jsx';
import ShowMore from '../show-more/show-more.jsx';
import {moviesListType, movieType} from '../../types/types.js';
import TitleMovie from '../title-movie/title-movie.jsx';
import {
  getFilteredMovies,
  getTitleMovie,
  getMoviesLoadingStatus,
  getMoviesRenderLimit,
  getActiveGenre,
  getMoviesLoadingErrorStatus,
  getAuthorizationStatusBoolean
} from '../../reducer/selectors.js';
import {connect} from 'react-redux';
import Loader from '../loader/loader.jsx';
import Error from '../error/error.jsx';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

const Main = (props) => {
  const {titleMovie, moviesList, activeGenre, moviesRenderLimit, loadingMovies, loadingMoviesError, isAuthorized} = props;
  const isShowMore = !(moviesRenderLimit > moviesList.length);
  if (loadingMoviesError) {
    return (
      <React.Fragment>
        <Header />
        <Error />
        <Footer />
      </React.Fragment>
    );
  }
  if (!loadingMovies) {
    return (
      <React.Fragment>
        <TitleMovie isAuthorized={isAuthorized} movie={titleMovie} />
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <GenreFilterList activeItem={activeGenre} />
            <div className="catalog__movies-list">
              <MoviesList
                moviesList={moviesList}
              />
            </div>
            {isShowMore && <ShowMore />}
          </section>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Header />
      <Loader />
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    activeGenre: getActiveGenre(state),
    moviesList: getFilteredMovies(state),
    titleMovie: getTitleMovie(state),
    moviesRenderLimit: getMoviesRenderLimit(state),
    loadingMovies: getMoviesLoadingStatus(state),
    loadingMoviesError: getMoviesLoadingErrorStatus(state),
    isAuthorized: getAuthorizationStatusBoolean(state),
  };
};

Main.propTypes = {
  titleMovie: movieType.isRequired,
  moviesList: moviesListType.isRequired,
  activeGenre: PropTypes.string.isRequired,
  moviesRenderLimit: PropTypes.number.isRequired,
  loadingMovies: PropTypes.bool.isRequired,
  loadingMoviesError: PropTypes.bool.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

export {Main};
export default connect(mapStateToProps)(Main);
