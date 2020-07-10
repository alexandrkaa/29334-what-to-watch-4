import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getMovieById} from '../../utils/filters.js';
import {moviesListType} from '../../types/types.js';
import Loader from '../../components/loader/loader.jsx';
import {getMovies} from '../../reducer/selectors.js';

const withMovieId = (Component) => {
  class withMovieIdHOC extends PureComponent {
    constructor(props) {
      super(props);
    }
    render() {
      const {loadingMovies} = this.props;
      if (!loadingMovies) {
        const {moviesList, match: {params: {id: movieId}}} = this.props;
        const movie = getMovieById(moviesList, movieId);
        return (
          <Component
            movie={movie}
            isMuted={true}
            videoWidth="100%"
            videoHeight="100%"
            videoSrc={movie.movieVideo}
            {...this.props}
          />
        );
      }
      return <Loader />;
    }
  }

  withMovieIdHOC.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    moviesList: moviesListType.isRequired,
    loadingMovies: PropTypes.bool.isRequired,
  };

  const mapStateToProps = (state) => {
    return {
      moviesList: getMovies(state),
    };
  };

  // export {withMovieId};
  // export default connect(mapStateToProps)(withMovieId);

  return connect(mapStateToProps)(withMovieIdHOC);
};

export default withMovieId;
