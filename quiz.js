$(document).ready(function(){

var rightAns=0;
var wrongAns=0;
var unanswered=0;
var time=30000;
var intervalId;


//create an object with the questions in the quiz

var quizQuestions =[
  {
  question: "Who is regarded as the first European to land in North America?",
  choices: ["Christopher Columbus", "Magellan", "Leif Erikson"],
  correctAnswer: "Leif Erikson"},

  {
  question: "Which is the longest war in US history?",
  choices: ["Afghan War", "Cold War", "Vietnam War"],
  correctAnswer: "Afghan War"
  },

  {
  question: "The first car accident in US history occured in which state?",
  choices: ["New York", "Ohio", "Rhode Island"],
  correctAnswer: "Ohio"
  },

  {
  question: "How many people were the Aztecs estimated to have sacrificed every year?",
  choices: ["3,000", "80,000", "250,000"],
  correctAnswer: "250,000"
  },

  {
  question: "The US Constitution was written in which year?",
  choices: ["1776", "1787", "1792"],
  correctAnswer: "1787"
  },

  {
  question: "Which artist painted the Sistene chapel?",
  choices: ["Da Vinci", "Rembrandt", "Michelangelo"],
  correctAnswer: "Michelangelo"
  },

];


//create a function that starts the game upon a button click
function startGame(){
$("#startButton").on("click", newQuiz)
};

//create page timer function

function decrement() {
  time--;
  if (time === 0) {
  stop();
  }
}

function runClock() {
  intervalId = setInterval(decrement, 1000);
}


//Set up quiz page

function newQuiz(){
  startGame();
  $("#mainQuiz").append("<h2>" + time + "</h2>");

}

//display right, wrong, and unanswered

function finalScore(){
  if (time===0 || finishButton){
    console.log(time);
  }
};

//button click to play again





});










