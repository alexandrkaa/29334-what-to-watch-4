import React from 'react';
import PropTypes from 'prop-types';


const MovieCardFullReviews = (props) => {
  const {comments} = props;
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {comments.filter((comment) => {
          return comment.id % 2 === 1;
        }).map((comment) => {
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
        })}
      </div>
      <div className="movie-card__reviews-col">
        {comments.filter((comment) => {
          return comment.id % 2 === 0;
        }).map((comment) => {
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
        })}
      </div>
    </div>
  );
};

MovieCardFullReviews.propTypes = {
  comments: PropTypes.arrayOf(
      PropTypes.shape({
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
