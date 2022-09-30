import { randomNumber } from '../src/randomNumber.js';
import game from '../src/start.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
const Even = (number) => number % 2 === 0;

const Round = () => {
  const number = randomNumber(100);
  const correctAnswer = Even(number) ? 'yes' : 'no';
  const question = (number).toString();
  return { question, correctAnswer };
};

const EvenGame = () => game(Round, instruction);

export default EvenGame;