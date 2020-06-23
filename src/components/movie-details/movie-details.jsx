import React from 'react';
import PropTypes from 'prop-types';

const MovieDetails = (props) => {
  const {movie} = props;
  const {movieDescription, movieDirector, movieStarring, movieImage, title,
    movieGenre, movieDate, movieBackground, movieRatingScore, movieRatingLevel, movieRatingCount} = movie;
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={movieBackground} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{movieGenre}</span>
              <span className="movie-card__year">{movieDate}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
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
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={movieImage} alt={title} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className="movie-nav__item movie-nav__item--active">
                  <a href="#" className="movie-nav__link">Overview</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Details</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <div className="movie-rating">
              <div className="movie-rating__score">{movieRatingScore}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{movieRatingLevel}</span>
                <span className="movie-rating__count">{movieRatingCount}</span>
              </p>
            </div>

            <div className="movie-card__text">
              {
                movieDescription.map((it, id) => {
                  return (
                    <p key={id}>{it}</p>
                  );
                })
              }
              <p className="movie-card__director"><strong>Director: {movieDirector}</strong></p>
              <p className="movie-card__starring"><strong>Starring: {movieStarring}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    movieDescription: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ),
    movieDirector: PropTypes.string.isRequired,
    movieStarring: PropTypes.string.isRequired,
    movieImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    movieGenre: PropTypes.string.isRequired,
    movieDate: PropTypes.string.isRequired,
    movieBackground: PropTypes.string.isRequired,
    movieRatingScore: PropTypes.string.isRequired,
    movieRatingLevel: PropTypes.string.isRequired,
    movieRatingCount: PropTypes.string.isRequired,
  })
};

export default MovieDetails;
