const commentAdapter = (comment, movieId) => {
  return {
    id: comment.id,
    movieId,
    author: {
      id: comment.user.id,
      name: comment.user.name
    },
    text: comment.comment,
    date: comment.date,
    rating: comment.rating,
  };
};

export default commentAdapter;
