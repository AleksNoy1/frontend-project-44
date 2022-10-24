import { getRandomIntFromRange } from '../randomNumber.js';
import play from '../index.js';

const instruction = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return null;
  }
  return result;
};

const generateRound = () => {
  const num1 = getRandomIntFromRange(20);
  const num2 = getRandomIntFromRange(20);
  const operators = ['+', '-', '*'];
  const indexOfOperator = getRandomIntFromRange(operators.length -1);
  const operator = operators[indexOfOperator];
  const correctAnswer = String(calculate(num1, num2, operator));
  const question = `${num1} ${operator} ${num2}`;
  return { question, correctAnswer };
};

const calcGame = () => play(generateRound, instruction);

export default calcGame;
