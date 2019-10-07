const board = document.getElementById("board");
let currentPlayer = "X";
let winner = false;
let turns; 
​
const winningCombos = [
  [0, 1, 2], // 1st row
  [3, 4, 5], // 2nd row
  [6, 7, 8], // 3rd row
  [0, 3, 6], // 1st column
  [1, 4, 7], // 2nd column
  [2, 5, 8], // 3rd column
  [0, 4, 8], // Diagonal
  [2, 4, 6] // Diagonal
];
​
function checkIfGridIsEmpty() {
}
​
function insertMarker(){
  
}
​
function changePlayer() {
​
}
​
​
function checkWin() {
  // if there is a winner, end the game
  // if turns === 9, that means it is a draw, also end the game
}
​
// Write down your pseudocode
// What should the flow be like from the moment the user clicks on the box?
​
​
Collapse




