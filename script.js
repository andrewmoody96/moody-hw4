// Functions:
// Starts quiz and populates the quiz with questions. 
function createQuiz() {
  console.log("Clicked");  
  // Stores question output
  const output = [];

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
    output.push(
      `<div class="slide">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")}</div>
      </div>`
    );
  });
  quizContainer.innerHTML = output.join(""); 
};

// Logs results to console.
function logResults() {
  console.log("Starting to log.");
  const answerContainers = quizContainer.querySelectorAll(".answers");

  // keeps track of user's correct answers
  let countCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    // finds user's selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    
    // checks if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      countCorrect++;
      console.log("Good job.");
    } else {
      console.log("That ain't it.");
    }
  });
  var name = prompt("What's your name?");
  console.log(name);
  var results = countCorrect;
  console.log(results);
};

// function storeResults()

function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;
  if (currentSlide === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline-block";
  }
  if (currentSlide === slides.length - 1) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "inline-block";
    submitBtn.style.display = "none";
  }
};

function showNext() {
  showSlide(currentSlide + 1);
}

function showPrev() {
  showSlide(currentSlide - 1);
}

const quizContainer = document.getElementById("quiz");
const scoreContainer = document.getElementById("score");
const submitBtn = document.getElementById("submit");
const myQuestions = [
// Object containing all possible questions.
  {
    question: "Inside which HTML element do we put our JavaScript?",
    answers: {
      a: "head",
      b: "p",
      c: "body",
    },
    correctAnswer: "c",
  },
  {
    question: "Which code example will display 'Hello World' in an alert?",
    answers: {
      a: "Answer 1",
      b: "Answer 2",
      c: "Answer 3",
    },
    correctAnswer: "c",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answers: {
      a: "Answer 1",
      b: "Answer 2",
      c: "Answer 3",
    },
    correctAnswer: "c",
  },
  {
    question:
      "How do you write an IF statement to execute code when 'i' is not equal to 5?",
    answers: {
      a: "Answer 1",
      b: "Answer 2",
      c: "Answer 3",
    },
    correctAnswer: "c",
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: {
      a: "Answer 1",
      b: "Answer 2",
      c: "Answer 3",
    },
    correctAnswer: "c",
  },
];

// Loads quiz when page loads.
createQuiz();

// Navigation and slides
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Displays first question's slide.
showSlide(currentSlide);

// Event Listeners

// Submits answers at the end of the quiz.
submitBtn.addEventListener("click", logResults)

// Returns to the previous question.
prevBtn.addEventListener("click", showPrev);

// Advances to the next question.
nextBtn.addEventListener("click", showNext);