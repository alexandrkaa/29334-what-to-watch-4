import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getMoviesComments, getCommentsLoadingStatus, getCommentsErrorStatus, getUserFavoriteList} from '../../reducer/selectors.js';
import {Operation as CommentsOperation, ActionCreator as CommentsDataActionCreator} from '../../reducer/data/comments-data/comments-data.js';
import {ActionCreator as MoviesDataActionCreator, Operation as MoviesDataOperation} from '../../reducer/data/movies-data/movies-data.js';
import MovieCardFullMenu from '../movie-card-full-menu/movie-card-full-menu.jsx';
import {MovieCardFullTabsIds, MovieCardFullTabs} from '../../consts/consts.js';
import MovieCardFullOverView from '../movie-card-full-overview/movie-card-full-overview.jsx';
import MovieCardFullDetails from '../movie-card-full-details/movie-card-full-details.jsx';
import MovieCardFullComments from '../movie-card-full-comments/movie-card-full-comments.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';
import MovieCardTitle from '../movie-card-title/movie-card-title.jsx';
import {moviesListType, movieType} from '../../types/types.js';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import MovieCardFullButtons from '../movie-card-full-buttons/movie-card-full-buttons.jsx';
import UserProfile from '../user-profile/user-profile.jsx';
import SimilarMovies from '../similar-movies/similar-movies.jsx';
import MovieCardBackground from '../movie-card-background/movie-card-background.jsx';

class MovieCardFull extends PureComponent {
  constructor(props) {
    super(props);

    this._handleMenuTabChange = this._handleMenuTabChange.bind(this);
    this._handlePlayButton = this._handlePlayButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.movie.id);
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
        return (<MovieCardFullComments movie={this.props.movie} comments={comments} isLoadingComments={isLoadingComments} isLoadingCommentsError={isLoadingCommentsError} />);
    }
    return (<MovieCardFullOverView movie={this.props.movie} />);
  }

  render() {
    const {
      movie,
      similarMovies,
      isAuthorized,
      addToUserFavoriteList,
      removeFromUserFavoriteList,
      history
    } = this.props;
    const {
      movieImage,
      title,
      movieGenre,
      movieDate,
      movieBackground,
      isFavorite
    } = movie;
    const movieCardFullTabs = MovieCardFullTabs.map((tab) => {
      return Object.assign({}, tab, {isActive: tab.id === this.props.activeItem});
    });
    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <MovieCardBackground movieBackground={movieBackground} title={title} />
            <Header>
              <UserProfile />
            </Header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <MovieCardTitle title={title} movieGenre={movieGenre} movieDate={movieDate} />
                <MovieCardFullButtons
                  onPlay={this._handlePlayButton}
                  movieId={movie.id}
                  isAuthorized={isAuthorized}
                  addToUserFavoriteList={addToUserFavoriteList}
                  removeFromUserFavoriteList={removeFromUserFavoriteList}
                  history={history}
                  isInUserFavoriteList={isFavorite}
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
          {similarMovies.length > 0 && <SimilarMovies moviesList={similarMovies} />}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

MovieCardFull.defaultProps = {
  activeItem: MovieCardFullTabsIds.OVERVIEW,
  comments: [],
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
  addToUserFavoriteList: PropTypes.func.isRequired,
  removeFromUserFavoriteList: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    comments: getMoviesComments(state, ownProps.movie.id),
    isLoadingComments: getCommentsLoadingStatus(state),
    isLoadingCommentsError: getCommentsErrorStatus(state),
    userFavoriteList: getUserFavoriteList(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchComments(movieId) {
    dispatch(CommentsDataActionCreator.fetchCommentsData());
    dispatch(CommentsOperation.getCommentsData(movieId));
  },
  addToUserFavoriteList(movieId) {
    dispatch(MoviesDataActionCreator.fetchUserFavoriteList());
    dispatch(MoviesDataOperation.postToUserFavoriteList(movieId));
  },
  removeFromUserFavoriteList(movieId) {
    dispatch(MoviesDataActionCreator.fetchUserFavoriteList());
    dispatch(MoviesDataOperation.removeFromUserFavoriteList(movieId));
  },
});

export {MovieCardFull};
export default connect(mapStateToProps, mapDispatchToProps)(withActiveItem(MovieCardFull));
