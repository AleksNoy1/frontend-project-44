import getRandomIntFromRange from '../randomNumber.js';
import play from '../index.js';

const instruction = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const generateRound = () => {
  const num1 = getRandomIntFromRange(0, 20);
  const num2 = getRandomIntFromRange(0, 20);
  const operators = ['+', '-', '*'];
  const indexOfOperator = getRandomIntFromRange(0, operators.length - 1);
  const operator = operators[indexOfOperator];
  console.log(operator, indexOfOperator);
  const correctAnswer = String(calculate(num1, num2, operator));
  const question = `${num1} ${operator} ${num2}`;
  return { question, correctAnswer };
};

const calcGame = () => play(generateRound, instruction);

export default calcGame;
