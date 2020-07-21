const commentAdapter = (comment) => {
  return {
    id: comment.id,
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
