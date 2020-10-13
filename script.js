/**
 * Guess The Number Game
 






 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */


let guesses = [];
let correctNumber = this.getRandomNumber();

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);

}

function playGame() {
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory(numberGuess);
  
}

function displayResult(numberGuess) {
  if(numberGuess < correctNumber) {
    showNumberBelow();
  } 
  else if (numberGuess > correctNumber) {
    showNumberAbove();
  } 
  else {
    showYouWon();
  }
}


/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  // *CODE GOES BELOW HERE *
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}


function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
  return randomNumber;
}


function saveGuessHistory(guess) {
  guesses.push(guess)
  console.log(guesses)
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index = guesses.length - 1; // TODO
  let list = "<ul class='list-group'>";
  
  while (index >= 0) {
      list += "<li class='list-group-item'>" +
      "You guessed " + guesses[index] +
      "</li>"
      index-=1;
  }list += '</ul>'
  document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  let dialog = getDialog('won', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}
