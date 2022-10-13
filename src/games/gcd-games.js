import { randomNumber } from '../randomNumber.js';
import game from '../index.js';

const instruction = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivider = (x, y) => (y ? greatestCommonDivider(y, x % y) : x);

const round = () => {
  const num1 = randomNumber(50);
  const num2 = randomNumber(50);
  const correctAnswer = String(greatestCommonDivider(num1, num2));
  const question = `${num1} ${num2}`;
  return { question, correctAnswer };
};

const gcdGame = () => game(round, instruction);

export default gcdGame;
