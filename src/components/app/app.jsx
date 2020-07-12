import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Router, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import MovieCardFull from '../movie-card-full/movie-card-full.jsx';
import {MOVIES_LIKE_THIS_NUM, MovieCardFullTabsIds} from '../../consts/consts.js';
import {moviesListType, movieType} from '../../types/types.js';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';
import {getFilteredMovies, getTitleMovie, getMoviesLoadingStatus, getMoviesRenderLimit, getActiveGenre} from '../../reducer/selectors.js';
import {DEFAULT_GENRE} from '../../consts/consts.js';
import FullScreenVideoPlayer from '../full-screen-video-player/full-screen-video-player.jsx';
import withMovieId from '../../hocs/with-movie-id/with-movie-id.js';
import Loader from '../loader/loader.jsx';
import history from '../../history.js';

const WrappedFullScreenVideoPlayer = withMovieId(FullScreenVideoPlayer);
// const WrappedFullScreenVideoPlayer = withRouter(FullScreenVideoPlayer);

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidCatch(err_, errInfo_) {
    console.log(err_, errInfo_);
  }

  // const {onActiveItemChange, moviesList, titleMovie, activeGenre, activeItem: movieId, moviesRenderLimit, loadingMovies} = props;
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/player/:id" component={Tmp} /> */}
          <Route exact path="/player/:id" render={
            (withIdProps) => {
              return (
                <WrappedFullScreenVideoPlayer loadingMovies={loadingMovies} {...withIdProps} />
              );
            }
          } />
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/" component={Tmp2} /> */}
        </Switch>
      </BrowserRouter>
    );
  }

  // const _renderApp = () => {
  //   if (!loadingMovies) {
  //     if (movieId) {
  //       const [movie] = moviesList.filter((it) => it.id === +movieId);
  //       const similarMovies = moviesList.filter((it) => it.movieGenre === movie.movieGenre && it.id !== movie.id).slice(0, MOVIES_LIKE_THIS_NUM - 1);
  //       return (
  //         <MovieCardFull
  //           movie={movie}
  //           similarMovies={similarMovies}
  //           activeItem={MovieCardFullTabsIds.OVERVIEW}
  //           onMovieTitleClick={onActiveItemChange}
  //         />
  //       );
  //     }
  //     return (
  //       <Main
  //         titleMovie={titleMovie}
  //         moviesList={moviesList}
  //         activeGenre={activeGenre}
  //         onMovieTitleClick={onActiveItemChange}
  //         moviesRenderLimit={moviesRenderLimit}
  //       />
  //     );
  //   }
  //   return (
  //     <Loader />
  //   );
  // };

  // return (
  //   <Router history={history}>
  //     <Switch>
  //       <Route exact path="/" render={
  //         () => (
  //           <Main
  //             titleMovie={titleMovie}
  //             moviesList={moviesList}
  //             activeGenre={activeGenre}
  //             onMovieTitleClick={onActiveItemChange}
  //             moviesRenderLimit={moviesRenderLimit}
  //             loadingMovies={loadingMovies}
  //           />
  //         )
  //       } />
  //       <Route exact path="/player/:id" render={
  //         (withIdProps) => {
  //           return (
  //             <WrappedFullScreenVideoPlayer loadingMovies={loadingMovies} {...withIdProps} />
  //           );
  //         }
  //       } />
  //     </Switch>
  //   </Router>
  // );
};

// App.defaultProps = {
//   activeGenre: DEFAULT_GENRE,
// };

// App.propTypes = {
//   titleMovie: movieType.isRequired,
//   moviesList: moviesListType.isRequired,
//   activeGenre: PropTypes.string.isRequired,
//   onActiveItemChange: PropTypes.func.isRequired,
//   activeItem: PropTypes.number,
//   moviesRenderLimit: PropTypes.number.isRequired,
//   loadingMovies: PropTypes.bool.isRequired,
// };

// const mapStateToProps = (state) => {
//   return {
//     activeGenre: getActiveGenre(state),
//     moviesList: getFilteredMovies(state),
//     titleMovie: getTitleMovie(state),
//     moviesRenderLimit: getMoviesRenderLimit(state),
//     loadingMovies: getMoviesLoadingStatus(state),
//   };
// };

// export {App};
// const WrappedApp = withActiveItem(App);
// export default connect(mapStateToProps)(WrappedApp);
export default App;
