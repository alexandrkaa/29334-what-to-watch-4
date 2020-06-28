import React from 'react';
import PropTypes from 'prop-types';
import MovieCardFullReviewList from '../movie-card-full-reviews-list/movie-card-full-reviews-list.jsx';


const MovieCardFullReviews = (props) => {
  const {comments} = props;
  const commentsOdd = comments.filter((comment) => {
    return comment.id % 2 === 1;
  });
  const commentsEven = comments.filter((comment) => {
    return comment.id % 2 === 0;
  });

  return (
    <div className="movie-card__reviews movie-card__row">
      <MovieCardFullReviewList comments={commentsOdd} />
      <MovieCardFullReviewList comments={commentsEven} />
    </div>
  );
};

MovieCardFullReviews.propTypes = {
  comments: PropTypes.arrayOf(
      PropTypes.exact({
        movieId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
      })
  ),
};

export default MovieCardFullReviews;
