import React from 'react';
import PropTypes from 'prop-types';

const MovieCardFullComment = (props) => {
  const {comment} = props;
  return (
    <div key={comment.id} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.text}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.author.name}</cite>
          <time className="review__date" dateTime={comment.date}>{comment.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );
};

MovieCardFullComment.propTypes = {
  comment: PropTypes.exact({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

export default MovieCardFullComment;
