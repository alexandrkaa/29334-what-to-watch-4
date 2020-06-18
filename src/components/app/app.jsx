import React from 'react';
import PropTypes from 'prop-types';
import Main from "../main/main.jsx";

const App = (props) => {
  const {titleMovie, moviesList} = props;
  const _handleMovieTitleClick = (evt) => {
    evt.preventDefault();
  };

  const _handleMovieCardMouseEnter = (evt) => {
    evt.preventDefault();
  };

  return (
    <Main titleMovie={titleMovie} moviesList={moviesList} onMovieCardMouseEnter={_handleMovieCardMouseEnter} onMovieTitleClick={_handleMovieTitleClick} />
  );
};

App.propTypes = {
  titleMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  }).isRequired,
  moviesList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
      })
  ).isRequired,
};

export default App;
