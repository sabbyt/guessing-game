var username = prompt("What is your name?").toUpperCase();
console.log(username);

alert("Welcome "+username+"!");

var question1 = prompt("Am I from Malaysia?").toUpperCase();
console.log("Question 1 Response: " + question1);

var question2 = prompt("Have I lived in Seattle for years?").toUpperCase();
console.log("Question 2 Response: " + question2);

var question3 = prompt("Do I surf?").toUpperCase();
console.log("Question 3 Response: " + question3);

alert("Your answer to the Question 1 was " + question1 + ".");

alert("Your answer to the Question 2 was " + question2 + ".");

alert("Your answer to the Question 3 was " + question3 + ".");

if (question1 === 'YES') {
  console.log('Question 1 answered correctly.');
} else {
  console.log('Question 1 wrong.');
  alert("No, you got Question 1 wrong...I AM from Malaysia!");
};

if (question2 === 'NO') {
  console.log('Question 2 answered correctly.');
} else {
  console.log('Question 2 wrong.');
  alert("No, you got Question 2 wrong...I just moved to Seattle!");
};

if (question3 === 'YES') {
  console.log('Question 3 answered correctly.');
} else {
  console.log('Question 3 wrong.');
  alert("No, you got Question 3 wrong...I LOVE to surf!");
};

alert("Thanks for playing my little guessing game!");
