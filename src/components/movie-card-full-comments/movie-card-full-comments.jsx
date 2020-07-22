import React from 'react';
import PropTypes from 'prop-types';
import MovieCardFullCommentsList from '../movie-card-full-comments-list/movie-card-full-comments-list.jsx';


const MovieCardFullComments = (props) => {
  const {comments} = props;
  const commentsOdd = comments.filter((comment) => {
    return comment.id % 2 === 1;
  });
  const commentsEven = comments.filter((comment) => {
    return comment.id % 2 === 0;
  });

  return (
    <div className="movie-card__reviews movie-card__row">
      <MovieCardFullCommentsList comments={commentsOdd} />
      <MovieCardFullCommentsList comments={commentsEven} />
    </div>
  );
}

MovieCardFullComments.propTypes = {
  comments: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        author: PropTypes.object.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
      })
  ),
};

export default MovieCardFullComments;

