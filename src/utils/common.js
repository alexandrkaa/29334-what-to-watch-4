import {SECS_PER_HOUR, RatingScores} from '../consts/consts.js';

export const generateRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const getRandomPartOfArray = (arr) => {
  const fromNum = generateRandomInteger(0, Math.floor(arr.length / 2));
  const toNum = generateRandomInteger(Math.floor(arr.length / 2) + 1, arr.length);
  return arr.slice(fromNum, toNum);
};


export const convertSecondsToHoursMins = (sec) => {
  const secToMin = sec % SECS_PER_HOUR;
  const mins = Math.round(secToMin / 60);
  if (sec < SECS_PER_HOUR) {
    return `${mins}m`;
  }
  const hours = (sec - secToMin) / 3600;
  return `${hours}h ${mins}m`;
};

export const convertMinutesToHoursMins = (mins) => {
  if (mins < 60) {
    return `${mins}m`;
  }
  return `${Math.floor(mins / 60) || 0}h ${(mins % 60) || 0}m`;
};

export const extendObject = (a, b) => {
  return Object.assign({}, a, b);
};

export const removeSpaces = (str) => {
  return str.replace(/\s+/g, ``);
};

export const secondsToTime = (initialSeconds) => {
  if (!initialSeconds) {
    return `00:00:00`;
  }
  const roundedSeconds = Math.round(initialSeconds);
  const hours = Math.floor(roundedSeconds / (60 * 60));
  const toMinutesSec = roundedSeconds % (60 * 60);
  const minutes = Math.floor(toMinutesSec / 60);
  const seconds = Math.ceil(toMinutesSec % 60);
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export const convertMovieRateToText = (rating) => {
  const rate = parseFloat(rating) || 0;
  if (rate === RatingScores.AWESOME.score) {
    return RatingScores.AWESOME.name;
  } else
  if (rate > RatingScores.VERYGOOD.score) {
    return RatingScores.VERYGOOD.name;
  } else
  if (rate > RatingScores.GOOD.score) {
    return RatingScores.GOOD.name;
  } else
  if (rate > RatingScores.NORMAL.score) {
    return RatingScores.NORMAL.name;
  } else
  if (rate > RatingScores.BAD.score) {
    return RatingScores.BAD.name;
  }
  return RatingScores.BAD.name;
};

export const updateMovieIsFavorite = (allMovies, newMovies) => {
  const newFavoriteIds = newMovies.map((movie) => movie.id);
  return allMovies.map((movie) => {
    if (newFavoriteIds.includes(movie.id)) {
      return newMovies.find((it) => it.id === movie.id);
    }
    return movie;
  });
};
