// Functions:

// Starts quiz and populates the quiz with questions. 
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
      `<div class="slide">
        <div class ="question"> ${currentQuestion.question}</div>
        <div class="answers"> ${answers.join("")}</div
      </div>`
    );
  });
  quizContainer.innerHTML = question.join("");
  quizContainer.insertAdjacentHTML(
    "beforeend",
    `<button id="prevQ">Previous Question</button><button id="nextQ">Next Question</button>`
  );  
}

// Logs results & MAYBE saves them to local storage.
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

function showQuestion()

function showNext()

function showPrev()

var startButton = document.querySelector("#startButton");
var quizContainer = document.querySelector("#quiz");
var prevBtn = document.querySelector("#previous");
var nextBtn = document.querySelector("#next");
var submitBtn = document.querySelector("#submit");
var scoreContainer = document.querySelector("#score");

// var quizForm = document.querySelector("#quiz-form");

// Object containing all possible questions.
const myQuestions = [
  {
    question: "Inside which HTML element do we put our JavaScript?",
    answers: {
      a: "head",
      b: "p",
      c: "body",
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





// Loads quiz when page loads.
createQuiz();

// Click submit to generate the next random question. Then display that question.


// // Moves to next question.
// nextQuestion.addEventListener("click", advanceSlide);

// // Moves to previous question.
// prevQuestion.addEventListener("click", prevSlide);