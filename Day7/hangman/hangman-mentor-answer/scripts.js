// ARRAY OF LIST OF LETTERS
let guesses = [];
//ARRAY OF GUESSED LETTERS
let prevGuesses = [];
let counter = 10;

// FUNCTION TO CREATE ALPHABET BUTTONS //
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
let words = [
  "malaysia",
  "china",
  "japan",
  "thailand",
  "vietnam",
  "laos",
  "macao",
  "cambodia",
  "singapore",
  "indonesia",
  "korea",
  "india"
];

let randomWord = words[Math.floor(Math.random() * words.length)];
let wordLength = randomWord.length;

// EMPTY WORD LIST IS SAME LENGTH AS RANDOMWORD.LENGTH & THE INNERHTML IS "_" SO "_" WILL TAKE UP THE NUMBER OF LETTERS IN THE WORD
wordHolder = document.getElementById("word-holder");
function wordToGuess() {
  for (i = 0; i < randomWord.length; i++) {
    guessWord = document.createElement("LI");
    guessWord.classList.add("list-group-item");
    guessWord.innerHTML = "_";
    guesses.push(guessWord);
    wordHolder.appendChild(guessWord);
    //list array//
    console.log(guessWord);
  }
}
window.onload = wordToGuess();

// FUNCTION TO CHECK IF BUTTONS HAVE ALREADY BEEN CLICKED //
function checkClick(alphaBtn) {
  alphaBtn = document.querySelectorAll(".btn");
  // ADD CLICKED EVENT TO EACH ALPHABET
  for (i = 0; i < alphaBtn.length; i++) {
    alphaBtn[i].addEventListener("click", e => {
      letter = e.target.innerHTML;
      e.target.disabled = true;
      counter--;
      displayCounter(counter);
      // CHECK IF LETTER IS IN THE RANDOMWORD
      for (let x = 0; x < randomWord.length; x++) {
        if (randomWord[x] === letter) {
          randomWord[x].innerHTML = letter;
          wordHolder.children[x].innerHTML = letter;
        }
      }
      prevGuesses.push(letter);
      guesses.push(letter);
      console.log(prevGuesses);
      console.log(guesses);
      let won = checkWin();
      if (won) {
        alert(`Congrats! The answer was ${randomWord}`);
      } else if (counter === 0) {
        alert(`Sorry. The answer was ${randomWord}`);
      }
    });
  }
}
window.onload = checkClick();

function checkWin() {
  let playerLost = false;
  for (i = 0; i < guesses.length; i++) {
    //if the word to guess still has blanks then player loses
    if (guesses[i].innerHTML === "_") {
      playerLost = true;
    }
  }
  return !playerLost;
}

//DISPLAY COUNTER
function displayCounter(counter) {
  let counterBox = document.getElementById("counter");
  counterBox.innerHTML = counter;
}

window.onload = displayCounter(counter);

//PLAY AGAIN BUTTON
function resetGame() {
  resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", function() {
    window.location.reload();
  });
}
