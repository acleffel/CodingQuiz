//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score
//THEN I can save my initials and my score



// GLOBAL 
// questions for the quiz
var questions = [ 

    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        options: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c. quotes"
    },
    {
        question: "How do you write a comment in Javascript?",
        options: ["a. //", "b. /*", "c. <--", "d. =="],
        answer: "a. //"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
        answer: "d. <script>"
    },
    {
        question: "Commonly used data types DO NOT include:",
        options: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "How do you create a function in JavaScript",
        options: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        answer: "b. function myFunction()"
    

    }];
var score = 0;
var questionIndex = 0;
var penalty = 5;
var timer = document.getElementById("timer");
var timesUp = document.getElementById("timesUp");
var choices = document.getElementById("choices");
var startQuiz = document.getElementById("startQuiz");
var quizTime = 60;
var beginQuiz = 0;



var answerA = document.getElementById("answerA"); 
var answerB = document.getElementById("answerB"); 
var answerC = document.getElementById("answerC"); 
var answerD = document.getElementById("answerD"); 

var question = document.querySelector(".question");

//FUNCTIONS 
function start() {
    var quizTime = 60
    var time = setInterval(function () {
        if(quizTime > 0) { 
            console.log(quizTime)
            quizTime--; 
          timer.textContent = quizTime + " seconds remaining";
        } else {
            timer.textContent = "";
            clearInterval(time);
          }  
        }, 1000)
        
        
( function(){
 
        })();

    }
function beginQuiz(){
    var currentQuestion = quiz[beginQuiz];
    
    
}
//CALLS
startQuiz.addEventListener("click", start) 
    
