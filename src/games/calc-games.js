import { randomNumber } from '../randomNumber.js';
import game from '../index.js';

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

const Round = () => {
  const num1 = randomNumber(20);
  const num2 = randomNumber(20);
  const indexOfOperator = randomNumber(3);
  const operators = ['+', '-', '*'];
  const operator = operators[indexOfOperator];
  const correctAnswer = String(calculate(num1, num2, operator));
  const question = `${num1} ${operator} ${num2}`;
  return { question, correctAnswer };
};

const CalcGame = () => game(Round, instruction);

export default CalcGame;