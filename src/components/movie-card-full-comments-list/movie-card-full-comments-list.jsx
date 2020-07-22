import React from 'react';
import PropTypes from 'prop-types';
import MovieCardFullComment from '../movie-card-full-comment/movie-card-full-comment.jsx';

const MovieCardFullCommentsList = (props) => {
  const {comments} = props;
  return (
    <div className="movie-card__reviews-col">
      {comments.map((comment) => (<MovieCardFullComment key={comment.id} comment={comment} />))}
    </div>
  );
};

MovieCardFullCommentsList.propTypes = {
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

export default MovieCardFullCommentsList;
