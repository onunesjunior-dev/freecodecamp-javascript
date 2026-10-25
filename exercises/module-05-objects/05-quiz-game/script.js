const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "NaCl"],
    answer: "H2O"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin"],
    answer: "Paris"
  },
  {
    category: "Technology",
    question: "Which language runs in web browsers?",
    choices: ["JavaScript", "C++", "Python"],
    answer: "JavaScript"
  },
  {
    category: "History",
    question: "In which year did World War II end?",
    choices: ["1945", "1918", "1939"],
    answer: "1945"
  },
  {
    category: "Mathematics",
    question: "What is 7 multiplied by 8?",
    choices: ["56", "48", "64"],
    answer: "56"
  }
];

function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  }
  return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
}
