import React from 'react';
import Header from '../header/header.jsx';
import withMovie from '../../hocs/with-movie/with-movie.js';
import {movieType} from '../../types/types.js';
import Breadcrumbs from '../breadcrumbs/breadcrumbs.jsx';
import AddReviewForm from '../add-review-form/add-review-form.jsx';

const AddReview = (props) => {
  const {
    movie: {
      id: movieId,
      title,
      movieImage,
      movieBackground,
    }
  } = props;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={movieBackground} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          renderBreadCrumbs={
            () => {
              return (<Breadcrumbs movie={props.movie} />);
            }
          }
        />

        <div className="movie-card__poster movie-card__poster--small">
          <img src={movieImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>
      <AddReviewForm movieId={movieId} />
    </section>

  );
};

AddReview.propTypes = {
  movie: movieType.isRequired,
};

export {AddReview};
export default withMovie(AddReview);
