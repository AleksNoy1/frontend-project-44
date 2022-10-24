import { getRandomIntFromRange } from '../randomNumber.js';
import play from '../index.js';

const instruction = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivider = (x, y) => (y ? greatestCommonDivider(y, x % y) : x);

const generateRound = () => {
  const num1 = getRandomIntFromRange(50);
  const num2 = getRandomIntFromRange(50);
  const correctAnswer = String(greatestCommonDivider(num1, num2));
  const question = `${num1} ${num2}`;
  return { question, correctAnswer };
};

const gcdGame = () => play(generateRound, instruction);

export default gcdGame;
