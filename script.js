/*Add your JavaScript here*/
//Define variables
var introvertCount = 0;
var extrovertCount = 0;
var questionCount = 0;

var allAmerican = document.getElementById("q1a1");
var meanGirls = document.getElementById("q1a2");

var summer = document.getElementById("q2a1");
var office = document.getElementById("q2a2");

var half = document.getElementById("q3a1");
var friends = document.getElementById("q3a2");


//functions
function introvert() {
  introvertCount += 1;
  questionCount += 1;
  console.log("Question count = " + questionCount + " Introvert score = " + introvertCount);
  if (questionCount == 3) {
  console.log("The quiz is done!");
  updateResults();
}
}

function extrovert() {
  extrovertCount += 1;
  questionCount += 1;
  console.log("Question count = " + questionCount + " Extrovert score = " + extrovertCount);
  if (questionCount == 3) {
  console.log("The quiz is done!");
  updateResults();
}
}

//Button Statements
allAmerican.addEventListener("click", extrovert);
meanGirls.addEventListener("click", introvert);
summer.addEventListener("click", extrovert);
office.addEventListener("click", introvert);
half.addEventListener("click", introvert);
friends.addEventListener("click", extrovert);

function updateResults() {
  if (extrovertCount >= 2) {
  console.log("You are an extrovert!");
  result.innerHTML = "You are an extrovert!";
} else if (introvertCount >= 2) {
  console.log("You are an introvert!");
  result.innerHTML = "You are an introvert!";
}
}
