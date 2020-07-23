import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../movie-list/movie-list.jsx';
import GenreFilterList from '../genre-filter-list/genre-filter-list.jsx';
import ShowMore from '../show-more/show-more.jsx';
import {moviesListType, movieType, myListType} from '../../types/types.js';
import TitleMovie from '../title-movie/title-movie.jsx';
import {
  getFilteredMovies,
  getTitleMovie,
  getMoviesLoadingStatus,
  getMoviesRenderLimit,
  getActiveGenre,
  getMoviesLoadingErrorStatus,
  getAuthorizationStatusBoolean,
  getMyList,
} from '../../reducer/selectors.js';
import {ActionCreator as MovieActionCreator} from '../../reducer/movie/movie.js';
import {connect} from 'react-redux';
import Loader from '../loader/loader.jsx';
import Error from '../error/error.jsx';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import UserProfile from '../user-profile/user-profile.jsx';

const Main = (props) => {
  const {
    titleMovie,
    moviesList,
    activeGenre,
    moviesRenderLimit,
    loadingMovies,
    loadingMoviesError,
    isAuthorized,
    myList,
    addToMyList,
    removeFromMyList,
  } = props;
  const isShowMore = !(moviesRenderLimit > moviesList.length);
  if (!loadingMovies && !loadingMoviesError) {
    return (
      <React.Fragment>
        <TitleMovie isAuthorized={isAuthorized} movie={titleMovie} myList={myList} addToMyList={addToMyList} removeFromMyList={removeFromMyList} />
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
      <Header headerClassName={`user-page__head`}>
        <UserProfile />
      </Header>
      {loadingMovies && <Loader />}
      {loadingMoviesError && <Error />}
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
    myList: getMyList(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToMyList(movieId) {
    dispatch(MovieActionCreator.addToMyList(movieId));
  },
  removeFromMyList(movieId) {
    dispatch(MovieActionCreator.removeFromMyList(movieId));
  },
});

Main.propTypes = {
  titleMovie: movieType.isRequired,
  moviesList: moviesListType.isRequired,
  activeGenre: PropTypes.string.isRequired,
  moviesRenderLimit: PropTypes.number.isRequired,
  loadingMovies: PropTypes.bool.isRequired,
  loadingMoviesError: PropTypes.bool.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  myList: myListType.isRequired,
  addToMyList: PropTypes.func.isRequired,
  removeFromMyList: PropTypes.func.isRequired,
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
