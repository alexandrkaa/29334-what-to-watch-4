import React from 'react';
import PropTypes from 'prop-types';
import MovieCardFullMenu from '../movie-card-full-menu/movie-card-full-menu.jsx';
import {MovieCardFullTabsIds, MovieCardFullTabs} from '../../consts/consts.js';
import MovieCardFullOverView from '../movie-card-full-overview/movie-card-full-overview.jsx';
import MovieCardFullDetails from '../movie-card-full-details/movie-card-full-details.jsx';
import MovieCardFullReviews from '../movie-card-full-reviews/movie-card-full-reviews.jsx';
import {randomComments} from '../../mocks/film.js';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';
import MoviesList from '../movie-list/movie-list.jsx';
import {moviesListType, movieType} from '../../types/types.js';
import {Link} from 'react-router-dom';

const MovieCardFull = (props) => {
  const {movie, similarMovies, activeItem, onActiveItemChange, onMovieTitleClick} = props;
  const {
    movieImage,
    title,
    movieGenre,
    movieDate,
    movieBackground,
  } = movie;

  const filtredComments = randomComments.filter((comment) => comment.movieId === movie.id);

  let movieCardFullTabs = MovieCardFullTabs.map((tab) => {
    return Object.assign({}, tab, {isActive: tab.id === activeItem});
  });

  const _handleMenuTabChange = (tabId) => {
    movieCardFullTabs = MovieCardFullTabs.map((tab) => {
      return Object.assign({}, tab, {isActive: tab.id === activeItem});
    });
    onActiveItemChange(tabId);
  };

  const _renderTabsContent = () => {
    switch (activeItem) {
      case MovieCardFullTabsIds.OVERVIEW:
        return (<MovieCardFullOverView movie={movie} />);

      case MovieCardFullTabsIds.DETAILS:
        return (<MovieCardFullDetails movie={movie} />);

      case MovieCardFullTabsIds.REVIEWS:
        return (<MovieCardFullReviews movie={movie} comments={filtredComments} />);

      default:
        return (<MovieCardFullOverView movie={movie} />);
    }
  };

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movieBackground} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movieGenre}</span>
                <span className="movie-card__year">{movieDate}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/player/${movie.id}`}>
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={movieImage} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <MovieCardFullMenu tabs={movieCardFullTabs} onClickMovieCardFullMenuTab={_handleMenuTabChange} />
              {_renderTabsContent()}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        {similarMovies.length > 0 &&
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            <MoviesList moviesList={similarMovies} onMovieTitleClick={onMovieTitleClick} />
          </div>
        </section>
        }
        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

MovieCardFull.propTypes = {
  movie: movieType.isRequired,
  similarMovies: moviesListType.isRequired,
  activeItem: PropTypes.string.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
};

export {MovieCardFull};
export default withActiveItem(MovieCardFull);
