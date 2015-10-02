document.getElementById("welcome");
document.getElementById("one");
document.getElementById("two");
document.getElementById("three");
document.getElementById("four");

var questions = ["Am I from Malaysia?", "Have I lived in Seattle for years?", "Do I surf?"];
var answers = ["YES","Y","NO","N"];

var username = prompt("What is your name?").toUpperCase();
  console.log("username: "+username);
  welcome.innerHTML="Welcome "+username+"!";
var correct = 0;

function ques1(){
  var question1 = prompt(questions[0]);
  console.log("Question 1 User Response: " + question1);
  if (question1.toUpperCase() === answers[0] || question1.toUpperCase() === answers[1]) {
    console.log('Question 1 correct.');
    one.className = 'correct';
    one.innerHTML = 'Rejoice! ' + username + ', you answered Question 1 correctly...I AM from Malaysia!' + "<p><img src= 'img/pokemon.png' width = '200' height ='200'/> </p>";
    correct++;
  } else {
    console.log('Question 1 wrong.');
    one.className = 'incorrect';
    one.innerHTML = "No "+ username + ", you got Question 1 wrong...I AM from Malaysia!";
  }
}

function ques2(){
  var question2 = prompt(questions[1]);
  console.log("Question 2 User Response: " + question2);
  if (question2.toUpperCase() === answers[2] || question2.toUpperCase() === answers[3]) {
    console.log('Question 2 correct.');
    two.className = 'correct';
    two.innerHTML = 'Rejoice! ' + username + ', you answered Question 2 correctly...I just moved to Seattle!' + "<p><img src= 'img/pokemon.png' width = '200' height ='200'/> </p>";
    correct++;
  } else {
    two.className = 'incorrect';
    console.log('Question 2 wrong.');
    two.innerHTML = "No "+ username + ", you got Question 2 wrong...I just moved to Seattle!";
  }
}

function ques3(){
  var question3 = prompt(questions[2]);
  console.log("Question 3 User Response: " + question3);
  if (question3.toUpperCase() === answers[0] || question3.toUpperCase() === answers[1]) {
    three.className ='correct';
    console.log('Question 3 correct.');
    three.innerHTML = 'Rejoice! ' + username + ', you answered Question 3 correctly...I LOVE to surf!' + "<p><img src= 'img/pokemon.png' width = '200' height ='200'/> </p>";
    correct++;
  } else {
    three.className ='incorrect';
    console.log('Question 3 wrong.');
    three.innerHTML = "No "+ username + ", you got Question 3 wrong...I LOVE to surf!";
  }
}

ques1();
window.setTimeout(ques2, 1000);
window.setTimeout(ques3, 1000);

function summary() {
  four.innerHTML = "You just got " + correct + " out of 3 questions correct! " + username + ", thanks for playing my little guessing game!";
}

summary();
