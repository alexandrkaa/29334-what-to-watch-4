import {convertMovieRateToText} from '../../utils/common.js';
const movieAdapter = (movie) => {
  return {
    id: movie.id,
    title: movie.name,
    backgroundColor: movie.background_color,
    image: movie.preview_image,
    movieDate: parseInt(movie.released, 10),
    movieGenre: movie.genre,
    movieBackground: movie.background_image,
    movieImage: movie.poster_image,
    movieRatingScore: movie.rating,
    movieRatingLevel: convertMovieRateToText(movie.rating),
    movieRatingCount: `${movie.scores_count} ratings`,
    movieDirector: movie.director,
    movieStarring: movie.starring,
    movieDescription: movie.description,
    moviePreview: movie.preview_video_link,
    movieVideo: movie.video_link,
    movieRunTime: movie.run_time,
    isFavorite: movie.is_favorite,
  };
};

export default movieAdapter;
