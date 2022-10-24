export const getRandomIntFromRange = (max, min = 1) => {
  const randomNum = min - 1 + Math.random() * (max - min + 1);
  return Math.round(randomNum);
};
