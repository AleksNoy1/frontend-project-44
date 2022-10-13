import { randomNumber } from '../randomNumber.js';
import game from '../index.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
const Even = (number) => number % 2 === 0;

const round = () => {
  const number = randomNumber(100);
  const correctAnswer = Even(number) ? 'yes' : 'no';
  const question = (number).toString();
  return { question, correctAnswer };
};

const evenGame = () => game(round, instruction);

export default evenGame;
