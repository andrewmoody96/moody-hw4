var startButton = document.querySelector("#startButton");
var quizContainer = document.querySelector("#quiz");
var scoreContainer = document.querySelector("#score");
var submitButton = document.querySelector("#submit");
// var quizForm = document.querySelector("#quiz-form");

// Object containing all possible questions.
const myQuestions = [
  {
    question: "Inside which HTML element do we put our JavaScript?",
    answers: {
      a: "Answer 1",
      b: "Answer 2",
      c: "Answer 3",
    },
    correctAnswer: "c",
  },
  // {
  //   question: "Which code example will display 'Hello World' in an alert?",
  //   answers: {
  //     a: "Answer 1",
  //     b: "Answer 2",
  //     c: "Answer 3",
  //   },
  //   correctAnswer: "c",
  // },
  // {
  //   question: "How do you call a function named 'myFunction'?",
  //   answers: {
  //     a: "Answer 1",
  //     b: "Answer 2",
  //     c: "Answer 3",
  //   },
  //   correctAnswer: "c",
  // },
  // {
  //   question:
  //     "How do you write an IF statement to execute code when 'i' is not equal to 5?",
  //   answers: {
  //     a: "Answer 1",
  //     b: "Answer 2",
  //     c: "Answer 3",
  //   },
  //   correctAnswer: "c",
  // },
  // {
  //   question: "How do you create a function in JavaScript?",
  //   answers: {
  //     a: "Answer 1",
  //     b: "Answer 2",
  //     c: "Answer 3",
  //   },
  //   correctAnswer: "c",
  // },
];
// Need to display a new question value from possibleQuestions on every click.
var currentQuestion = "";

// Make sure that question is displayed before the answers. This is ugly right now but it WORKS.
function createQuiz() {
  console.log("Clicked");
  // Stores question output
  document.getElementById("selectYourAnswer-text").style.display = "block";
  document.getElementById("quiz-form").style.display = "block";
  let question = [];

  // Show submit ONCE -- Place outside of loop
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // Stores list of answers.
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<br><label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
      );
    }
    question.push(
      `<div class ="question"> ${currentQuestion.question}</div>
          <div class="answers"> ${answers.join("")}</div`
    );
  });
  quizContainer.innerHTML = question.join("");
  // quizForm.innerHTML = `<input type="submit" name="submitAnswer" id="submit" value="Submit Answer"></input>`;
  quizContainer.insertAdjacentHTML(
    "beforeend",
    `<button type="submit" id="submit">Submit Answers</button>`
  );  
}



function logResults() {
  console.log("Starting to log.");
  const correctAnswers = currentQuestion.correctAnswer;
  // const allAnswers = quizContainer.querySelectorAll(".answers");
  // keeps track of user's correct answers
  let countCorrect = 0;
  let countIncorrect = 0;
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // finds user's selected answer
    var answerContainer = allAnswers[questionNumber];
    var selector = `input[name=question${questionNumber}]:checked`;
    var userAnswer = (answerContainer.querySelector(selector) || {}).value;
    // checks if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
    } else {
      numIncorrect++;
    }
  });
}

// Starts quiz.
startButton.addEventListener("click", createQuiz);

// Click submit to generate the next random question. Then display that question.
submitButton.addEventListener("submit", logResults);
