import React from 'react';
import PropTypes from 'prop-types';
import MovieCardFullCommentsList from '../movie-card-full-comments-list/movie-card-full-comments-list.jsx';
import Loader from '../loader/loader.jsx';
import Error from '../error/error.jsx';

const MovieCardFullComments = (props) => {
  const {comments, isLoadingComments, isLoadingCommentsError} = props;
  if (isLoadingComments && !(comments.length > 0)) {
    return <Loader />;
  }
  if (isLoadingCommentsError) {
    return <Error />;
  }
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
};

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
  isLoadingComments: PropTypes.bool.isRequired,
  isLoadingCommentsError: PropTypes.bool.isRequired,
};

export default MovieCardFullComments;

