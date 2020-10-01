// welcome screen w/ start button 
var startButton = document.querySelector("start");
var time = document.getElementById("timer");
var secondsLeft=60;

// start button needs an event listener


// there should be a function within the event listener for timer function


function startTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      time.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }

  function sendMessage() {
    time.textContent = "Times Up!";
  }
  
   var starter = startTime();

  startButton.addEventListener("click",starter);

  
//   function sendMessage() {
//     time = ;

// 1.timer starts a countdown (60 secs)
// 2.prompt for a question with answer choices on it for user to select 

// **easiest way to store info would be an array of objects!

// within one object you will have 3 different keys:

// 1. the question
// 2.an array of answer choices
// 3. a string with the correct answer

// **the reason you want to group all of the above into one object is to show it in the screen at the same time

// when you click the answer button it should spark another function: 
// (Need an event listener to do this)
// Function should:
//  a. show the next question in the array of objects 
//  b. show a message (text) saying if the answer is correct or incorrect 
//  c. compare the text on the button to the correct answer choice to see if it is correct 
//  d. if the text is incorrect, then decrement the timer

// Once you are at the end of the questions or the timer is over then the game is over. Use the below to signal game over.

// You will need a conditional statement: 
// IF the timer is zero, THEN stop giving questions 

// You will need your function to somehow be saved as a variable to stop the function. Similar to calling a function, you can stop.

// Another screen should pop up at the end for high scores. 
// 1.You need to have a way to save your initials and the timer score 
// Put the information into local storage in order to save 