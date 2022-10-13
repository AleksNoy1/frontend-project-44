import { randomRange } from '../randomNumber.js';
import game from '../index.js';

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

const round = () => {
  const start = randomRange(1, 20);
  const step = randomRange(1, 6);
  const index = randomRange(1, 9);
  const correctAnswer = String(calcProgressionNumber(start, step, index));
  const question = getProgression(start, step, index);
  return { question, correctAnswer };
};

const progressionGame = () => game(round, instruction);

export default progressionGame;
