import { randomNumber } from '../randomNumber.js';
import game from '../index.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNumber = (num) => {
  if (num <= 1) {
    return false;
  }
  let divider = 2;
  while (divider <= (num / 2)) {
    if (num % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

const round = () => {
  const question = randomNumber(100);
  const correctAnswer = primeNumber(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const primeGame = () => game(round, instruction);

export default primeGame;
