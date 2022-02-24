var submitButton = document.querySelector("submit");
// Array with all possible questions.
var possibleQuestions = ["Inside which HTML element do we put our JavaScript?", "Which code example will display 'Hello World' in an alert?", "How do you call a function named 'myFunction'?", "How do you write an IF statement to execute code when 'i' is not equal to 5?", "How do you create a function in JavaScript?"]

// provides random question from array of questions
function randomQuestion(submit) {
    submit.preventDefault()
    console.log("Clicked");
    
}

// Click submit to generate the next random question. Then display that question.
// need to preventDefault
submitButton.addEventListener("submit", randomQuestion);