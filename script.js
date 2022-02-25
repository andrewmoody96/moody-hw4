var questionText = document.querySelector("#currentQuestion");
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




function displayQuestion(event) {
  event.preventDefault();
  console.log("Clicked");
  var question = document.createElement()
  
  
  
  // if (possibleQuestions.length === 0) {
  //     return("Game Over");
  // } else {
  //     for (var i = 0; i < possibleQuestions.length; i++)
        
  // }
  
//   if (alreadyAsked.length === 0) {
//       for (var i = 0; i < possibleQuestions.length; i++) alreadyAsked.push(i);
  
  
//     }

  console.log(possibleQuestions.toString);


//   currentQuestion = possibleQuestions.forEach()
//   for (let i = 0; i <= 4; i++) {
//       console.log(currentQuestion)
//       currentQuestion = possibleQuestions[i];
//   }
//   console.log(currentQuestion);
  
  
//   document.getElementById("#questions");
//   currentQuestion.append(randomQuestion);
}

// Click submit to generate the next random question. Then display that question.
// need to preventDefault
submitButton.addEventListener("click", displayQuestion);
