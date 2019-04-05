$(document).ready(function(){

var rightAns=0;
var wrongAns=0;
var unanswered=0;
var time=30;
var intervalId;
var answer=[]


//create an object with the questions in the quiz

var quizQuestions =[
  {
    question: "Who is regarded as the first European to land in North America?",
    choices: ["Christopher Columbus", "Magellan", "Leif Erikson"],
    correctAnswer: "Leif Erikson",
  },
  {
    question: "Which is the longest war in US history?",
    choices: ["Afghan War", "Cold War", "Vietnam War"],
    correctAnswer: "Afghan War",
  },
  {
    question: "The first car accident in US history occured in which state?",
    choices: ["New York", "Ohio", "Rhode Island"],
    correctAnswer: "Ohio",
  },
  {
    question: "How many people were the Aztecs estimated to have sacrificed every year?",
    choices: ["3,000", "80,000", "250,000"],
    correctAnswer: "250,000",
  },
  {
    question: "The US Constitution was written in which year?",
    choices: ["1776", "1787", "1792"],
    correctAnswer: "1787",
  },
  {
    question: "Which artist painted the Sistene chapel?",
    choices: ["Da Vinci", "Rembrandt", "Michelangelo"],
    correctAnswer: "Michelangelo",
  },

];


//create a function that starts the game upon a button click
function startGame(){
$("#startButton").on("click", newQuiz)
};

//create page timer function


function runClock() {
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  time--;
  $("#timer").html("<h2>Time remaining: " + time + "</h2>");
  if (time===0){
    userTimeout();
  }
 }

function userTimeout(){
  if (time===0){
    clearInterval(intervalId);
  }
}

//Set up quiz page
function quizRun(){
  for (var i = 0; i < quizQuestions.length; i++) {
    $("#mainQuiz").append(`<p>${quizQuestions[i].question}</p>`);
    for (var j = 0; j < quizQuestions[i].choices.length; j++) {
      var choice= quizQuestions[i].choices[j]
      var jerrysKids= `JerrysKids${i}${j}`
      var morty= `#JerrysKids${i}${j}`
      $("#mainQuiz").append(`<p><input class="form-check-input" value="${choice}" type="radio" id="${jerrysKids}" name="JerrysKids${i}">${choice}</p>`);
      $(morty).select(function(e){
        e.preventDefault();
      })
    } 
  }
  $("#mainQuiz").on("change", ".form-check-input", function(){
    var questionIndex = $(this).attr("name")
    var answer=$(this).val();
    
  })
}


//Run the game
startGame();

function newQuiz(){
  $("#mainQuiz").append(`<h3>How much do you know about history?</h3>`)
  $("#startButton").hide();
  quizRun();
  runClock();
  $("#mainQuiz").append("<button type='button' class='btn btn-primary btn-lg' id='finishButton'>Finished!</button>");
  finishButton();
  scoreCounter();

}

//display right, wrong, and unanswered

function scoreCounter(){
  for (var a = 0; i < quizQuestions[i].correctAnswer.length; a++ ){
    var correctAnswer=quizQuestions[i].correctAnswer[a];
  if (answer===quizQuestions.correctAnswer[a]){
    rightAns++;
  } else if (answer!==quizQuestions.correctAnswer[a]){
    wrongAns++;
  } else (unanswered++);
  console.log(rightAns)
 }}

function finishButton(){
  $("#finishButton").on("click", finalScore)
    scoreCounter();  
  }
  

//placeholders until it works "4"

function finalScore(){
  $("#mainQuiz").html(
    "<p> Correct answers= 4 <br> Wrong answers= 4 <br> Unanswered= 4 </p> <br> <button type='button' class='btn btn-primary btn-lg' id='startButton'>Play Again!</button>");
    startGame();
  
}
//button click to play again





});










