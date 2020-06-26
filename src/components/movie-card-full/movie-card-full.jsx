import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCardFullMenu from '../movie-card-full-menu/movie-card-full-menu.jsx';
import MovieCardFullTabs from '../../mocks/movie-full-card-menu.js';
import {MovieCardFullTabsIds} from '../../consts/consts.js';
import MovieCardFullOverView from '../movie-card-full-overview/movie-card-full-overview.jsx';
import MovieCardFullDetails from '../movie-card-full-details/movie-card-full-details.jsx';
import MovieCardFullReviews from '../movie-card-full-reviews/movie-card-full-reviews.jsx';
import {randomComments} from '../../mocks/film.js';

class MovieCardFull extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: MovieCardFullTabsIds.OVERVIEW,
    };

    this.MovieCardFullTabs = MovieCardFullTabs.map((tab) => {
      if (tab.id === MovieCardFullTabsIds.OVERVIEW) {
        return Object.assign({}, tab, {isActive: true});
      }
      return Object.assign({}, tab, {isActive: false});
    });

    this._handleMenuTabClick = this._handleMenuTabClick.bind(this);
  }

  _handleMenuTabClick(tabId, evt) {
    evt.preventDefault();
    this.setState(() => {
      this.MovieCardFullTabs = this.MovieCardFullTabs.map((tab) => {
        if (tab.id === tabId) {
          return Object.assign({}, tab, {isActive: true});
        }
        return Object.assign({}, tab, {isActive: false});
      });
      return {
        activeTab: tabId
      };
    });
  }

  _renderTabsContent() {
    const {activeTab} = this.state;
    const {movie} = this.props;
    switch (activeTab) {
      case MovieCardFullTabsIds.OVERVIEW:
        return (<MovieCardFullOverView movie={movie} />);

      case MovieCardFullTabsIds.DETAILS:
        return (<MovieCardFullDetails movie={movie} />);

      case MovieCardFullTabsIds.REVIEWS:
        return (<MovieCardFullReviews movie={movie} comments={randomComments.filter((comment) => comment.movieId === movie.id)} />);

      default:
        return (<MovieCardFullOverView movie={movie} />);
    }
  }

  render() {
    const {movie} = this.props;
    const {
      movieImage,
      title,
      movieGenre,
      movieDate,
      movieBackground,
    } = movie;
    return (
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
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
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
              <MovieCardFullMenu tabs={this.MovieCardFullTabs} onClickMovieCardFullMenuTab={this._handleMenuTabClick} />
              {this._renderTabsContent()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

MovieCardFull.propTypes = {
  movie: PropTypes.shape({
    movieDescription: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ),
    id: PropTypes.number.isRequired,
    movieDirector: PropTypes.string.isRequired,
    movieStarring: PropTypes.string.isRequired,
    movieImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    movieGenre: PropTypes.string.isRequired,
    movieDate: PropTypes.string.isRequired,
    movieBackground: PropTypes.string.isRequired,
    movieRatingScore: PropTypes.string.isRequired,
    movieRatingLevel: PropTypes.string.isRequired,
    movieRatingCount: PropTypes.string.isRequired,
    movieRunTime: PropTypes.number,
  })
};

export default MovieCardFull;
