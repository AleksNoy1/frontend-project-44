import { getRandomIntFromRange } from '../randomNumber.js';
import play from '../index.js';

const instruction = 'What number is missing in the progression?';

const getProgression = (start, step, index) => {
  const progression = [start];
  const progressionLength = 10;
  for (let i = 1; i < progressionLength; i += 1) {
    if (index === i) {
      progression.push('..');
    } else {
      const progressionNumber = start + step * i;
      progression.push(progressionNumber);
    }
  }
  return progression.join(' ');
};

const calcProgressionNumber = (start, step, index) => start + step * index;

const generateRound = () => {
  const start = getRandomIntFromRange(20);
  const step = getRandomIntFromRange(6);
  const index = getRandomIntFromRange(9);
  const correctAnswer = String(calcProgressionNumber(start, step, index));
  const question = getProgression(start, step, index);
  return { question, correctAnswer };
};

const progressionGame = () => play(generateRound, instruction);

export default progressionGame;
