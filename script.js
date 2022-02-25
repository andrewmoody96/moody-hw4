var startButton = document.querySelector("#startButton");
var quizContainer = document.querySelector("#quiz");
var submitButton = document.querySelector("#submit");


// Object containing all possible questions.
const myQuestions = [
  {
    question: "Inside which HTML element do we put our JavaScript?",
    answers: {
      a: "Answer 1",
      b: "Answer 2",
      c: "Answer 3"
    },
    correctAnswer: "c"
  },
  {
    question: "Which code example will display 'Hello World' in an alert?",
    answers: {
      a: "Answer 1",
      b: "Answer 2",
      c: "Answer 3"
    },
    correctAnswer: "c"
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answers: {
      a: "Answer 1",
      b: "Answer 2",
      c: "Answer 3"
    },
    correctAnswer: "c"
  },
  {
    question: "How do you write an IF statement to execute code when 'i' is not equal to 5?",
    answers: {
      a: "Answer 1",
      b: "Answer 2",
      c: "Answer 3"
    },
    correctAnswer: "c"
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: {
      a: "Answer 1",
      b: "Answer 2",
      c: "Answer 3"
    },
    correctAnswer: "c"
  },  
];
// Need to display a new question value from possibleQuestions on every click. 
var currentQuestion = "";
// push the displayed index into alreadyAsked and remove it from possibleQuestions
var alreadyAsked = [];

function createQuiz() {
  console.log("Clicked");
  // Stores question output
  document.getElementById("selectYourAnswer-text").style.display = "block";
  document.getElementById("quiz-form").style.display = "block";
  let question = [];
  myQuestions.forEach((currentQuestion, questionNumber) => {
      // Stores list of answers.
      const answers = [];
      
      for(letter in currentQuestion.answers){
        answers.push(
          `<label><input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
          </label>`
          );
        }
        question.push(
          `<div class ="question"> ${currentQuestion.question}</div>
          <div class="answers"> ${answers.join('')}</div`
        );
      }  
  );
  quizContainer.innerHTML = question.join('');

  console.log(question.toString);


//   currentQuestion = possibleQuestions.forEach()
//   for (let i = 0; i <= 4; i++) {
//       console.log(currentQuestion)
//       currentQuestion = possibleQuestions[i];
//   }
//   console.log(currentQuestion);
  
  
//   document.getElementById("#questions");
//   currentQuestion.append(randomQuestion);
}


// Starts quiz.
startButton.addEventListener("click", createQuiz);

// Click submit to generate the next random question. Then display that question.
// submitButton.addEventListener("click", displayQuestion);
