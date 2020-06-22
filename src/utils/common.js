export const generateRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const getRandomPartOfArray = (arr) => {
  const fromNum = generateRandomInteger(0, Math.floor(arr.length / 2));
  const toNum = generateRandomInteger(Math.floor(arr.length / 2) + 1, arr.length);
  return arr.slice(fromNum, toNum);
};
