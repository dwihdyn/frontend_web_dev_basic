const boxes = []; // place to store X & O while being clicked
const N_SIZE = 3;
const EMPTY = ""; //  empty space to detect whether this has been clicked or not. can be replaced with EMPTY = "&nbsp;"
let turn = "X"; // always start with X (player1 is always X). TicTacToe official rule is that player1 is always X
let moves;

// Getting the game ready (build table, etc)
function init() {
  let board = document.createElement("table"); // make the container to put in the 9 small boxes + it functions
  board.setAttribute("border", 1); // border = true. expect to see nothing, as we have not define how many boxes we want to make & size
  board.setAttribute("cellspacing", 0); // cellspacing = false. dont want any space between boxes

  // creating 3 things : (1) the 9 boxes by loop + (2) assign different name classes to each using .classList.add('col' + j, 'row'+ i ) + (3) make all 9 clickable using .addEventListener('click', set)
  let identifier = 1; // identifier to keep track the game progress. values = [1,2,4,8,16,32,64,128,256]
  for (let i = 0; i < N_SIZE; i++) {
    let row = document.createElement("tr"); // create the row, to store 3 cells in it
    board.appendChild(row); // deploy that new row (1x3) into the BIG (3x3) game board

    for (let j = 0; j < N_SIZE; j++) {
      let cell = document.createElement("td"); // create 1 small cell-children inside. and the other 2 of 3 cell created by this loop

      // cell sizes setting using .setAttribute (CSS alternative)
      cell.setAttribute("height", 100);
      cell.setAttribute("width", 100);
      cell.setAttribute("align", "center");
      cell.setAttribute("valign", "center");

      cell.classList.add("col" + j, "row" + i); // doing (2) : <td class="col0 row0"> result on first loop . assign that newly created box with class="col_j row_i"

      // doing (2) : <td class="col0 row0" diagonal0> result on  first loop. diagonal0 is left-to-right '\' winning method
      if (i == j) {
        cell.classList.add("diagonal0"); // aim to assign at col=0, row=0 | col=1, row=1 | col=2, row=2
      }

      // doing (2) : <td class="col2 row1" diagonal1> result on  third loop. diagonal1 is right-to-left '/' winning method
      if (j == N_SIZE - i - 1) {
        cell.classList.add("diagonal1"); // aim to assign at col=2, row=0 | col=1, row=1 | col=0, row=2
      }

      cell.identifier = identifier; // assign identifier to that particular cell
      cell.addEventListener("click", actionWhenBoxClicked); // doing (3) : immediately enable that small cell to be clicked using 'addEvent', with the action as function below defined in `set()`
      row.appendChild(cell); // deploy those 1 of 3 small cell into big row
      boxes.push(cell); // insert that newly created cell into boxes ARRAY
      identifier.identifier; // increment identifier
    }
  }

  document.getElementById("tictactoe").appendChild(board);
  startNewGame();
}

//===== function run when initialisation of whole New Game
function startNewGame() {
  moves = 0; // reset moves
  turn = "X"; // reset turn
  boxes.forEach(function(nineSquares) {
    nineSquares.innerHTML = EMPTY; // clear all boxes
  });
}

//================ win() & actionWhenBoxClicked() runs ONLY when user click any of the box
//===== function to check whether a winner has emerged along every step of the game
function win(eventWhenClicked) {}

//===== function to explain whats gonna happen if you click that one particular cell
function actionWhenBoxClicked() {
  // `this` refer to the selected cell, since that we put set() while we create the small cells and implement it each differently
  if (this.innerHTML !== EMPTY) {
    return alert("dude tf no man"); // if the cell is NOT empty (has an X or O already), tell user that theres content alrd in it
  }
  this.innerHTML = turn; // load whos turn is it now (X or O)
  moves = moves + 1; // increment to keep track how many moves have been made

  // win
  if (win(this)) {
    alert("Winner is : Player " + turn); // if this current state win, print "winner is" X or O
    startNewGame(); // immediate refresh to start new game
    // draw
  } else if (moves == N_SIZE * N_SIZE) {
    alert("its a draw, play again"); // if more than 9 moves has been made, its a draw
    startNewGame(); // immediate refresh to start new game

    // game not over yet, and no winner
  } else {
    if (turn === "X") {
      turn = "O"; // if now is X, change to O
    } else {
      turn = "X";
    }
    document.getElementById; // print out whose the current player using .textContest = "player" + turn
  }
}
init();
