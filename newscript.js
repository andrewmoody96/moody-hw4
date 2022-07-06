// SELECTING ANSWERS ---
// When an answer button is selected, display the next question.
// If correct, display "Correct", else display "Incorrect" and subtract time from the timer.

// GAME OVER ---
// If timer === 0, display the score (equal to the amount of time left). -- need a function for this.
// Display a text input to store user's initials and score in localStorage.
// After clicking submit, display "Scores" and the last user's initials and score on the page.

// VARIABLES
const startBtn = document.getElementById("startBtn");
const submitBtn = document.getElementById("submitBtn");
const scoresBtn = document.getElementById("scoresBtn");
// array containing all questions
const questions = [
  "Inside which HTML element do we put our JavaScript?",
  "Which code example will display 'Hello World' in an alert?",
  "How do you call a function named 'myFunction'?",
  "How do you write an IF statement to execute code when 'i' is not equal to 5?",
  "How do you create a function in JavaScript?",
];

const options = [
  //     correct: c a b b a
  { a: "head", b: "p", c: "body" },
  {
    a: 'alert("Hello World")',
    b: 'display("Hello World")',
    c: 'alert: "Hello World"',
  },
  {
    a: "call {myFunction()}",
    b: "myFunction()",
    c: "call function myFunction()",
  },
  {
    a: "if [i !=5]",
    b: "if (i != 5)",
    c: "if i(!= 5)",
  },
  {
    a: "function myFunction()",
    b: "function = myFunction()",
    c: "function:myFunction()",
  },
];
let questionNumber = questions[0];
const questionContainer = document.getElementById("questionContainer");
const questionText = document.getElementById("quiz");
const answerContainer = document.getElementById("answers-input");

// START THE QUIZ ---
// Start quiz upon click of a "start quiz" button. --- CHECK
// As part of the quiz, also start & display a timer. --- CHECK
// When the quiz starts, remove the "start quiz" button. --- CHECK
// When the quiz starts, display 'select an answer'. --- CHECK
// If timer hits 0 before submitting, display user's score -- need a function for this.
// -------------------------------------------------------------------------------------

// starts quiz, starts/displays timer, displays instructions, calls questionHandler.
function startQuiz() {
  //   Starts timer, logs "Quiz Started", hides Start button.
  let timeLeft = 60;
  var quizTimer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(quizTimer);
    } else if (timeLeft === 0) {
      displayScore(correct);
    }
    document.getElementById(
      "timer"
    ).innerHTML = `Time Remaining: ${timeLeft} seconds`;
    timeLeft -= 1;
  }, 1000);

  document.getElementById(
    "selectYourAnswer-text"
  ).innerHTML = `Select your answer`;

  questionHandler();
}

function questionHandler() {
  console.log("Quiz has begun.")
  // q for questions, o for options, a for answer 
  let q = 0
  let o = 0

  currentQuestion = questions[q];
  quiz.innerHTML = currentQuestion;

  let [a, b, c] = [options[o].a, options[o].b, options[o].c]
  
  let currentOptions = [a, b, c]

  // Creates and Renders buttons
  currentOptions.forEach((option) => {
    answerContainer.insertAdjacentHTML("afterbegin", `<input type="radio" id="html" name="fav_language" value="${option}">
      <label for="html">${option}</label><br>`)
  })

  // answerContainer.innerHTML = currentOptions;
}

// EVENT LISTENERS:
// -------------------------------------------------------------------------------------
startBtn.addEventListener("click", startQuiz);
// window.addEventListener("click", nextQuestion);
