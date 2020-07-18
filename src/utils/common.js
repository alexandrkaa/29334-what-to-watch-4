import {SECS_PER_HOUR, EMAIL_FIELD_ID, PASSWORD_FIELD_ID} from '../consts/consts.js';

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
  const _initialSeconds = Math.round(initialSeconds);
  const hours = Math.floor(_initialSeconds / (60 * 60));
  const _toMinutesSec = _initialSeconds % (60 * 60);
  const minutes = Math.floor(_toMinutesSec / 60);
  const seconds = Math.ceil(_toMinutesSec % 60);
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export const isValidEmail = (email) => {
  const re = /.+\@.+\..+/;
  return re.test(String(email).toLowerCase());
};

export const isValidPassword = (password) => {
  return password.length > 5;
};

export const isValidField = (id, field) => {
  switch (id) {
    case EMAIL_FIELD_ID:
      return isValidEmail(field);
    case PASSWORD_FIELD_ID:
      return isValidPassword(field);
    default:
      throw new Error(`No corresponding func to validate`);
  }
};
