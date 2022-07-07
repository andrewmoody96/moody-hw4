// GAME OVER ---
// Display a text input to store user's initials and score in localStorage.
// After clicking submit, display "Scores" and the last user's initials and score on the page.

// VARIABLES
const startBtn = document.getElementById("startBtn");

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
    a: "alert('Hello World')",
    b: "display('Hello World')",
    c: "alert: 'Hello World'",
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

const correct = [
  "body",
  "alert('Hello World')",
  "myFunction()",
  "if (i != 5)",
  "function myFunction()",
];

let correctAnswers = 0;

let questionNumber = questions[0];
const questionContainer = document.getElementById("questionContainer");
const questionText = document.getElementById("quiz");
const answerContainer = document.getElementById("answers-input");
const answerForm = document.getElementById("answers-form");
const questionButtons = [document.getElementsByName("choice")];

let q = 0;
let o = 0;
let cA = 0;
let timeLeft = 60;

function gameOver() {
  finalScore = document.createElement("div");
  finalScore.setAttribute("id", "finalScore");
  finalScore.insertAdjacentHTML(
    "afterbegin",
    `<h2>Your score is ${(correctAnswers +=
      timeLeft)}</h2><br><label for="initials">Enter your initials.</label><br>
    <input type="text" id="name" name="name" maxlength="3" onkeyup="this.value = this.value.toUpperCase();">`
  );
  answerContainer.append(finalScore);
  timeLeft = 0;
}

function startQuiz() {
  // resets quiz
  answerForm.innerHTML = "";
  q = 0;
  o = 0;
  cA = 0;
  questionNumber = q;

  var quizTimer = setInterval(function () {
    document.getElementById(
      "timer"
    ).innerHTML = `Time Remaining: ${timeLeft} seconds`;
    timeLeft -= 1;

    if (timeLeft === 0) {
      gameOver();
      return;
    } else if (timeLeft <= 0) {
      clearInterval(quizTimer);
    }
  }, 1000);

  document.getElementById(
    "selectYourAnswer-text"
  ).innerHTML = `Select your answer`;

  questionHandler();
}

// DISPLAY CORRECT OR INCORRECT
// Checks if value of selected answer matches the correct answer.
function checkAnswer() {
  // clears rightOrWrong for next question
  const rightOrWrong = document.getElementById("rightOrWrong");
  let heading = "";
  // rightOrWrong.innerHTML = heading;

  const radioButtons = document.querySelectorAll('input[name="choice"]');
  let userAnswer;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      userAnswer = radioButton.value;
      break;
    }
  }

  if (userAnswer === correct[cA]) {
    correctAnswers++;
    let heading = '<h4 id="rightOrWrong" style="color: green;">Correct!</h4>';
    rightOrWrong.innerHTML = heading;
  } else {
    // subtracts time (points) when incorrect
    let heading = '<h4 id="rightOrWrong" style="color: red;">Incorrect! <span style="color: black;">-5 points</span></h4>';
    rightOrWrong.innerHTML = heading;
    timeLeft = timeLeft - 5;
  }
}

function questionHandler() {
  // gets question and appends it to the proper div
  currentQuestion = questions[q];
  questionText.innerHTML = currentQuestion;

  let [a, b, c] = [options[o].a, options[o].b, options[o].c];
  let currentOptions = [a, b, c];
  let nextBtn;

  // Advances to next question and clears out prev question.
  function next(click) {
    click.preventDefault();
    questionNumber++;
    console.log(questionNumber);
    if (questionNumber === 5) {
      checkAnswer();
      gameOver();
    } else {
      checkAnswer();
      q++;
      o++;
      cA++;
      answerForm.innerHTML = "";
      questionHandler();
    }
  }

  // Creates and Renders radio buttons
  currentOptions.forEach((option) => {
    answerForm.insertAdjacentHTML(
      "afterbegin",
      `<input type="radio" name="choice" value="${option}">
        <label for="choice">${option}</label><br>`
    );
  });

  // Determines whether a 'next' or 'submit' button is shown based on q index.
  if (q === 4) {
    answerForm.insertAdjacentHTML(
      "beforeend",
      `<button id="submitBtn">Submit</button>`
    );
    let submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", next);
  } else {
    answerForm.insertAdjacentHTML(
      "beforeend",
      `<button id="nextBtn">Next</button>`
    );
    nextBtn = document.getElementById("nextBtn");
    nextBtn.addEventListener("click", next);
  }
}

// EVENT LISTENERS:
// -------------------------------------------------------------------------------------
startBtn.addEventListener("click", startQuiz);
