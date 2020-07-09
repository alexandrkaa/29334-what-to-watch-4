const movieAdapter = (movie) => {
  return {
    id: movie.id,
    title: movie.name,
    backgroundColor: movie.background_color,
    image: movie.preview_image,
    movieDate: movie.released,
    movieGenre: movie.genre,
    movieBackground: movie.background_image,
    movieImage: movie.poster_image,
    movieRatingScore: movie.rating,
    // TODO: convert rating score to text rating
    movieRatingLevel: movie.rating,
    movieRatingCount: `${movie.scores_count} ratings`,
    movieDirector: movie.director,
    movieStarring: movie.starring,
    movieDescription: movie.description,
    moviePreview: movie.preview_video_link,
    movieVideo: movie.video_link,
    movieRunTime: movie.run_time,
    isFavorite: movie.isFavorite
  };
};

export default movieAdapter;
