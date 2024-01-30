const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let candidateName = '';
let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];

let correctAnswers = [
  'Sally Ride',
  'true',
  '40',
  'Trajectory',
  '3'
];

let candidateAnswers = [];

// TODO 1.1b: Ask for candidate's name //
function askForName() {
  candidateName = input.question("What is your name? ");
}

// TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
function askQuestion() {
  let answer = '';

  questions.forEach((question) => {
    answer = input.question(question);
    candidateAnswers.push(answer);
  })

}

// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //   
//TODO 3.2 use the variable grade to calculate the candidates score.
function gradeQuiz(candidateAnswers) {
  let amountCorrect = 0;

  candidateAnswers.forEach((answer) => {
    if (answer.toLowerCase() === correctAnswers[candidateAnswers.indexOf(answer)].toLowerCase()) {
      console.log(`${answer} = ${correctAnswers[candidateAnswers.indexOf(answer)]}`)
      amountCorrect++;
    } else {
      console.log(`${answer} != ${correctAnswers[candidateAnswers.indexOf(answer)]}`)
    }
  })

  let grade = (amountCorrect) / (questions.length) * 100;

  return grade;
}

// TODO 1.1c: Greet candidate using their name //
function runProgram() {
  askForName();
  console.log(`"Hello, ${candidateName}!`);
  askQuestion();
  let grade = gradeQuiz(candidateAnswers);
  if (grade >= 80) {
    console.log(`>>> Overall Grade: ${grade}% <<<`);
    console.log(`>>> Status: PASSED <<<`);
  } else {
    console.log(`>>> Overall Grade: ${grade}% <<<`);
    console.log(`>>> Status: FAILED <<<`);
  }
}

runProgram();
// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};