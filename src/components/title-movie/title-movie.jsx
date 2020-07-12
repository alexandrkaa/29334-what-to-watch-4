import React from 'react';
import {movieType} from '../../types/types.js';
import Header from '../header/header.jsx';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

const TitleMovie = (props) => {
  const {
    title,
    movieGenre,
    movieDate,
    movieImage,
    movieBackground,
    id: movieId,
  } = props.movie;

  const _handlePlayClick = (evt) => {
    evt.preventDefault();
    props.history.push(`/player/${movieId}`);
  };

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={movieBackground} alt="The Grand Budapest Hotel"/>
      </div>

      <Header />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={movieImage} alt="The Grand Budapest Hotel poster"
              width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{movieGenre}</span>
              <span className="movie-card__year">{movieDate}</span>
            </p>

            <div className="movie-card__buttons">
              <button onClick={_handlePlayClick} className="btn btn--play movie-card__button" type="button">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TitleMovie.propTypes = {
  movie: movieType.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(TitleMovie);
