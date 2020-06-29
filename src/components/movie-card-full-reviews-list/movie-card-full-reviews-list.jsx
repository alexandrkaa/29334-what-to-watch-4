import React from 'react';
import PropTypes from 'prop-types';
import MovieCardFullReview from '../movie-card-full-review/movie-card-full-review.jsx';

const MovieCardFullReviewsList = (props) => {
  const {comments} = props;
  return (
    <div className="movie-card__reviews-col">
      {comments.map((comment) => (<MovieCardFullReview key={comment.id} comment={comment} />))}
    </div>
  );
};

MovieCardFullReviewsList.propTypes = {
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

export default MovieCardFullReviewsList;
