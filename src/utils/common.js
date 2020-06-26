import {SECS_PER_HOUR} from '../consts/consts.js';

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
