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
  getMoviesLoadingErrorStatus,
  getMoviesRenderLimit,
  getActiveGenre,
  getAuthorizationStatusBoolean,
  getUserFavoriteList,
  getTitleMovieLoadingStatus,
  getTitleMovieLoadingErrorStatus,
} from '../../reducer/selectors.js';
import {ActionCreator as MoviesDataActionCreator, Operation as MoviesDataOperation} from '../../reducer/data/movies-data/movies-data.js';
import {connect} from 'react-redux';
import Loader from '../loader/loader.jsx';
import Error from '../error/error.jsx';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import UserProfile from '../user-profile/user-profile.jsx';
import {getMovieById} from '../../utils/filters.js';

const Main = (props) => {
  const {
    titleMovie,
    loadingTitleMovie,
    loadingTitleMovieError,
    moviesList,
    loadingMovies,
    loadingMoviesError,
    activeGenre,
    moviesRenderLimit,
    isAuthorized,
    addToUserFavoriteList,
    removeFromUserFavoriteList,
  } = props;
  const isShowMore = !(moviesRenderLimit > moviesList.length);
  if (!loadingMovies && !loadingMoviesError && !loadingTitleMovie && !loadingTitleMovieError) {
    return (
      <React.Fragment>
        <TitleMovie isAuthorized={isAuthorized}
          movie={getMovieById(moviesList, titleMovie.id)}
          addToUserFavoriteList={addToUserFavoriteList}
          removeFromUserFavoriteList={removeFromUserFavoriteList}
        />
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
      <Header headerClassName="user-page__head">
        <UserProfile />
      </Header>
      {(loadingMovies || loadingTitleMovie) && <Loader />}
      {(loadingMoviesError || loadingTitleMovieError) && <Error />}
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    moviesList: getFilteredMovies(state),
    loadingMovies: getMoviesLoadingStatus(state),
    loadingMoviesError: getMoviesLoadingErrorStatus(state),

    titleMovie: getTitleMovie(state),
    loadingTitleMovie: getTitleMovieLoadingStatus(state),
    loadingTitleMovieError: getTitleMovieLoadingErrorStatus(state),

    activeGenre: getActiveGenre(state),
    moviesRenderLimit: getMoviesRenderLimit(state),
    isAuthorized: getAuthorizationStatusBoolean(state),

    userFavoriteList: getUserFavoriteList(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToUserFavoriteList(movieId) {
    dispatch(MoviesDataActionCreator.fetchUserFavoriteList());
    dispatch(MoviesDataOperation.postToUserFavoriteList(movieId));
  },
  removeFromUserFavoriteList(movieId) {
    dispatch(MoviesDataActionCreator.fetchUserFavoriteList());
    dispatch(MoviesDataOperation.removeFromUserFavoriteList(movieId));
  },
});

Main.propTypes = {
  moviesList: moviesListType.isRequired,
  titleMovie: movieType.isRequired,
  activeGenre: PropTypes.string.isRequired,
  moviesRenderLimit: PropTypes.number.isRequired,
  loadingMovies: PropTypes.bool.isRequired,
  loadingMoviesError: PropTypes.bool.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  addToUserFavoriteList: PropTypes.func.isRequired,
  removeFromUserFavoriteList: PropTypes.func.isRequired,
  loadingTitleMovie: PropTypes.bool.isRequired,
  loadingTitleMovieError: PropTypes.bool.isRequired,
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
