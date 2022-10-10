export const randomNumber = (max) => Math.floor(Math.random() * max);
export const randomRange = (min, max) => {
    const randomNumber = min - 1 + Math.random() * (max - min + 1);
    return Math.round(randomNumber);
  };