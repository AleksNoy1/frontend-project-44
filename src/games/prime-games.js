import getRandomIntFromRange from '../randomNumber.js';
import play from '../index.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
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

const generateRound = () => {
  const question = getRandomIntFromRange(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const primeGame = () => play(generateRound, instruction);

export default primeGame;
