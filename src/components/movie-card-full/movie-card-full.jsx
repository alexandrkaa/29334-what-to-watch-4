import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getMoviesComments, getCommentsLoadingStatus, getCommentsErrorStatus} from '../../reducer/selectors.js';
import {Operation as CommentsOperation, ActionCreator as CommentsDataActionCreator} from '../../reducer/data/comments-data/comments-data.js';
import MovieCardFullMenu from '../movie-card-full-menu/movie-card-full-menu.jsx';
import {MovieCardFullTabsIds, MovieCardFullTabs} from '../../consts/consts.js';
import MovieCardFullOverView from '../movie-card-full-overview/movie-card-full-overview.jsx';
import MovieCardFullDetails from '../movie-card-full-details/movie-card-full-details.jsx';
import MovieCardFullComments from '../movie-card-full-comments/movie-card-full-comments.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';
import MoviesList from '../movie-list/movie-list.jsx';
import {moviesListType, movieType} from '../../types/types.js';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import MovieCardFullButtons from '../movie-card-full-buttons/movie-card-full-buttons.jsx';
import UserProfile from '../user-profile/user-profile.jsx';

class MovieCardFull extends PureComponent {
  constructor(props) {
    super(props);

    this._handleMenuTabChange = this._handleMenuTabChange.bind(this);
    this._handlePlayButton = this._handlePlayButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.movie.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movie.id !== this.props.movie.id) {
      this.props.fetchComments(this.props.movie.id);
    }
  }

  _handlePlayButton(evt) {
    evt.preventDefault();
    this.props.history.push(`/player/${this.props.movie.id}`);
  }

  _handleMenuTabChange(tabId) {
    this.props.onActiveItemChange(tabId);
  }

  _renderTabsContent() {
    const {comments, isLoadingComments, isLoadingCommentsError} = this.props;
    switch (this.props.activeItem) {
      case MovieCardFullTabsIds.OVERVIEW:
        return (<MovieCardFullOverView movie={this.props.movie} />);

      case MovieCardFullTabsIds.DETAILS:
        return (<MovieCardFullDetails movie={this.props.movie} />);

      case MovieCardFullTabsIds.REVIEWS:
        return (
          <MovieCardFullComments
            movie={this.props.movie}
            comments={comments}
            isLoadingComments={isLoadingComments}
            isLoadingCommentsError={isLoadingCommentsError}
          />
        );
    }
    return (<MovieCardFullOverView movie={this.props.movie} />);
  }

  render() {
    const {movie, similarMovies, isAuthorized} = this.props;
    const {
      movieImage,
      title,
      movieGenre,
      movieDate,
      movieBackground,
    } = movie;
    const movieCardFullTabs = MovieCardFullTabs.map((tab) => {
      return Object.assign({}, tab, {isActive: tab.id === this.props.activeItem});
    });
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
                  onPlay={this._handlePlayButton}
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
                <MovieCardFullMenu tabs={movieCardFullTabs} onClickMovieCardFullMenuTab={this._handleMenuTabChange} />
                {this._renderTabsContent()}
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
  }
}

MovieCardFull.defaultProps = {
  activeItem: MovieCardFullTabsIds.OVERVIEW,
  comments: []
};

MovieCardFull.propTypes = {
  movie: movieType.isRequired,
  similarMovies: moviesListType.isRequired,
  activeItem: PropTypes.string.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  fetchComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  isLoadingComments: PropTypes.bool.isRequired,
  isLoadingCommentsError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    comments: getMoviesComments(state, ownProps.movie.id),
    isLoadingComments: getCommentsLoadingStatus(state),
    isLoadingCommentsError: getCommentsErrorStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchComments(movieId) {
    dispatch(CommentsDataActionCreator.fetchCommentsData());
    dispatch(CommentsOperation.getCommentsData(movieId));
  },
});

export {MovieCardFull};
export default connect(mapStateToProps, mapDispatchToProps)(withActiveItem(MovieCardFull));
