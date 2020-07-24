import React from 'react';
import PropTypes from 'prop-types';

const MovieCardBackground = (props) => {
  const {movieBackground, title} = props;
  return (
    <div className="movie-card__bg">
      <img src={movieBackground} alt={title} />
    </div>
  );
};

MovieCardBackground.propTypes = {
  movieBackground: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieCardBackground;
