document.getElementById("welcome");
document.getElementById("one");
document.getElementById("two");
document.getElementById("three");
document.getElementById("four");

var username = prompt("What is your name?").toUpperCase();
console.log(username);
welcome.innerHTML="Welcome "+username+"!";
var correct = 0;

function ques1(){
  var question1 = prompt("Am I from Malaysia?");
  console.log("Question 1 Response: " + question1);
  if (question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y') {
  console.log('Question 1 correct.');
  one.innerHTML = 'Rejoice! ' + username + ', you answered Question 1 correctly...I AM from Malaysia!';
  correct++;
  } else {
  console.log('Question 1 wrong.');
  one.innerHTML = "No "+ username + ", you got Question 1 wrong...I AM from Malaysia!";
  }

}

function ques2(){
  var question2 = prompt("Have I lived in Seattle for years?");
  console.log("Question 2 Response: " + question2);
  if (question2.toUpperCase() === 'NO' || question2.toUpperCase() === 'N') {
  console.log('Question 2 correct.');
  two.innerHTML = 'Rejoice! ' + username + ', you answered Question 2 correctly...I just moved to Seattle!';
  correct++;
  } else {
  console.log('Question 2 wrong.');
  two.innerHTML = "No "+ username + ", you got Question 2 wrong...I just moved to Seattle!";
  }

}

function ques3(){
  var question3 = prompt("Do I surf?");
  console.log("Question 3 Response: " + question3);
  if (question3.toUpperCase() === 'YES' || question3.toUpperCase() === 'Y') {
  console.log('Question 3 correct.');
  three.innerHTML = 'Rejoice! ' + username + ', you answered Question 3 correctly...I LOVE to surf!';
  correct++;
  } else {
  console.log('Question 3 wrong.');
  three.innerHTML = "No "+ username + ", you got Question 3 wrong...I LOVE to surf!";
  }

}

ques1();
ques2();
ques3();

function summary() {
  four.innerHTML = "You just got " + correct + " out of 3 questions correct! " + username + ", thanks for playing my little guessing game!";
}

summary();
