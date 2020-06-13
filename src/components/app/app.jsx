import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {titleMovie, moviesList} = props;

  return (
    <Main titleMovie={titleMovie} moviesList={moviesList} />
  );
};

App.propTypes = {
  titleMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  }).isRequired,
  moviesList: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
};

export default App;
