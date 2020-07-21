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
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import MovieCardFullButtons from '../movie-card-full-buttons/movie-card-full-buttons.jsx';
import UserProfile from '../user-profile/user-profile.jsx';

const MovieCardFull = (props) => {
  const {movie, similarMovies, activeItem, onActiveItemChange, isAuthorized} = props;
  const {
    movieImage,
    title,
    movieGenre,
    movieDate,
    movieBackground,
  } = movie;

  const _handlePlayButton = (evt) => {
    evt.preventDefault();
    props.history.push(`/player/${movie.id}`);
  };

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

          <Header>
            <UserProfile />
          </Header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movieGenre}</span>
                <span className="movie-card__year">{movieDate}</span>
              </p>

              <MovieCardFullButtons
                onPlay={_handlePlayButton}
                movieId={movie.id}
                isReviewVisible={isAuthorized}
              />

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
            <MoviesList moviesList={similarMovies} />
          </div>
        </section>
        }
        <Footer />
      </div>
    </React.Fragment>
  );
};

MovieCardFull.defaultProps = {
  activeItem: MovieCardFullTabsIds.OVERVIEW,
};

MovieCardFull.propTypes = {
  movie: movieType.isRequired,
  similarMovies: moviesListType.isRequired,
  activeItem: PropTypes.string.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

export {MovieCardFull};
export default withActiveItem(MovieCardFull);
