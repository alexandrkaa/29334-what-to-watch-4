import {DEFAULT_GENRE, MOVIES_LIKE_THIS_NUM, FieldsIds, REVIEW_STARS_NUMBER, ReviewTextLength} from '../consts/consts.js';

export const getFilteredMovies = (movies, movieGenre) => {
  return movies.filter((movie) => isSameText(movie.movieGenre, movieGenre));
};

export const getMoviesByGenre = (movies, movieGenre) => {
  return movieGenre === DEFAULT_GENRE ? movies : getFilteredMovies(movies, movieGenre);
};

export const getWithLimit = (movies, start, stop) => {
  return movies.slice(start, stop);
};

export const getGenresFromMovies = (movies) => {
  return Array.from(new Set(movies.map((movie) => movie.movieGenre)));
};

export const isSameText = (firstString, secondString) => {
  return firstString.toLowerCase() === secondString.toLowerCase();
};

export const getMovieByIdFilter = (moviesList, id) => {
  const [movie] = moviesList.filter((it) => it.id === parseInt(id, 10));
  return movie;
};

export const getSimilarMovies = (movies, currentMovie) => {
  return getWithLimit(movies.filter((movie) => isSameText(movie.movieGenre, currentMovie.movieGenre) && movie.id !== currentMovie.id), 0, MOVIES_LIKE_THIS_NUM);
};

export const isValidEmail = (email) => {
  const re = /.+\@.+\..+/;
  return re.test(String(email).toLowerCase());
};

export const isValidPassword = (password) => {
  return password.length > 5;
};

export const isValidRating = (rating) => {
  return (+rating > 0 && +rating <= REVIEW_STARS_NUMBER);
};

export const isValidComment = (comment) => {
  return (comment.length >= ReviewTextLength.MIN && comment.length <= ReviewTextLength.MAX);
};

export const isValidField = (id, field) => {
  switch (id) {
    case FieldsIds.EMAIL_FIELD_ID:
      return isValidEmail(field);
    case FieldsIds.PASSWORD_FIELD_ID:
      return isValidPassword(field);
    case FieldsIds.RATING_FIELD_ID:
      return isValidRating(field);
    case FieldsIds.COMMENTS_FIELD_ID:
      return isValidComment(field);
    default:
      throw new Error(`No corresponding func to validate`);
  }
};
