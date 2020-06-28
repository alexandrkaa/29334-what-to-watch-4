import React from 'react';
import PropTypes from 'prop-types';

const MovieCardFullReview = (props) => {
  const {comment} = props;
  return (
    <div key={comment.id} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.text}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.author}</cite>
          <time className="review__date" dateTime={comment.date}>{comment.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );
};

MovieCardFullReview.propTypes = {
  comment: PropTypes.exact({
    id: PropTypes.number.isRequired,
    movieId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

export default MovieCardFullReview;
