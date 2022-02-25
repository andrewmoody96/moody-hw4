var questionText = document.querySelector("#questions");
var submitButton = document.querySelector("#submit");
// Array with all possible questions.
var possibleQuestions = ["Inside which HTML element do we put our JavaScript?", "Which code example will display 'Hello World' in an alert?", "How do you call a function named 'myFunction'?", "How do you write an IF statement to execute code when 'i' is not equal to 5?", "How do you create a function in JavaScript?"]

// var question0Answers = 
// provides random question from array of questions

function randomQuestion(e) {
    e.preventDefault();
    var randomQuestion = possibleQuestions[Math.floor(Math.random() * possibleQuestions.length)];
    console.log(randomQuestion);
    document.getElementById("#questions");
    currentQuestions.append("<p>randomQuestion</p>");
        
}

// Click submit to generate the next random question. Then display that question.
// need to preventDefault
submitButton.addEventListener("click", randomQuestion);