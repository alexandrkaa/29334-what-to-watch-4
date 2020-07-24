import React from 'react';
import PropTypes from 'prop-types';

const MovieCardTitle = (props) => {
  const {title, movieGenre, movieDate} = props;
  return (
    <React.Fragment>
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{movieGenre}</span>
        <span className="movie-card__year">{movieDate}</span>
      </p>
    </React.Fragment>
  );
};

MovieCardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieDate: PropTypes.number.isRequired,
};

export default MovieCardTitle;
