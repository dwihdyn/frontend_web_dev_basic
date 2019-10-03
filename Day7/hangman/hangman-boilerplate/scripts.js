// GLOBAL VARIABLES HERE
let counter = 10;
//any other variables you think you need

// FUNCTION TO CREATE ALPHABET BUTTONS AND DISPLAY //
function createAlphabet() {
  let alphabet = [];
  for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  let alphabetButtons = document.getElementById("buttons");

  for (i = 0; i < alphabet.length; i++) {
    let alphaBtn = document.createElement("button");
    alphaBtn.classList.add("btn");
    alphaBtn.innerHTML = alphabet[i];
    alphabetButtons.appendChild(alphaBtn);
  }
}
window.onload = createAlphabet();

// RANDOMLY LOOP THROUGH WORDS TO GUESS //
let words = [];

// FUNCTION TO CLICK EACH LETTER AND DISPLAY CORRECT LETTERS //
function enterGuessLetter() {
  //some code here
}

// CHECK IF LETTER HAS ALREADY BEEN CLICKED //
function checkClick() {
  //some code here
}

// CHECK IF LETTER IS IN THE WORD TO GUESS //
function validateLetter() {
  //some code here
}

// CHECK IF PLAYER HAS WON //
function checkWin() {
  //some code here
}

// DISPLAY NUMBER OF GUESSES LEFT //
function displayCounter() {
  //some code here
}

// RESET GAME //
function resetGame() {
  //some code here
}
