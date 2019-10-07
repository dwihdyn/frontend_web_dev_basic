/**
 * Tic Tac Toe
 *
 * A Tic Tac Toe game in HTML/JavaScript/CSS.
 *
 * No dependencies - Uses Vanilla JS
 *
 * @author: Vasanth Krishnamoorthy
 */
let N_SIZE = 3,
  EMPTY = "", //  empty space. can be replaced with EMPTY = "&nbsp;"
  boxes = [],
  turn = "X",
  // score,
  moves;

/**
 * Initializes the Tic Tac Toe board and starts the game.
 */
function init() {
  var board = document.createElement("table");
  board.setAttribute("border", 1);
  board.setAttribute("cellspacing", 0);

  // var identifier = 1; // identifier to keep track the game progress. values = [1,2,4,8,16,32,64,128,256]

  //debugger; OPEN MEEEE

  for (var i = 0; i < N_SIZE; i++) {
    var row = document.createElement("tr"); // create the row-parent
    board.appendChild(row); // deploy that new row (1x3) into the BIG (3x3) game board
    for (var j = 0; j < N_SIZE; j++) {
      var cell = document.createElement("td"); // create the 3 small cell-children inside
      cell.setAttribute("height", 120);
      cell.setAttribute("width", 120);
      cell.setAttribute("align", "center");
      cell.setAttribute("valign", "center");

      cell.classList.add("col" + j, "row" + i); // <td class="col0 row0"> result on first loop . assign that newly created box with class="col_j row_i"

      // console.log(cell); // deleteme

      if (i == j) {
        cell.classList.add("diagonal0"); // <td class="col0 row0" diagonal0> result on  first loop.
      }
      if (j == N_SIZE - i - 1) {
        cell.classList.add("diagonal1");
      }
      //cell.identifier = identifier;
      cell.addEventListener("click", actionWhenBoxClicked); // immediately enable that small cell to be clicked using 'addEvent'
      row.appendChild(cell); // put those 1 of 3 small cell into big row
      boxes.push(cell); // put that newly created cell into list of boxes that we just stored
      //identifier += identifier;
    }
  }

  document.getElementById("tictactoe").appendChild(board); // deploy the whole table, that contains 9 small boxes, with 9 different classes each, and all clickable into HTML
  startNewGame();
}

/**
 * New game
 */
function startNewGame() {
  // score = {
  //   X: 0,
  //   O: 0
  // };
  moves = 0;
  turn = "X";
  boxes.forEach(function(square) {
    square.innerHTML = EMPTY;
  });
}

/**
 * Check if a win or not
 */
// win() runs only when there is click
function win(clicked) {
  // Get all cell classes

  var memberOf = clicked.className.split(/\s+/); // if clicked at top left, output for clicked.className is a string "col0 row0 diagonal0", for clicked.className.split(/\s+/) is [col0, row0, diagonal0] in array. will be split appropriately thanks to .split(regex) | .className will output the name of that selected class. using regex to split the inputted things in the box [X,O,O,X] and see whether a particular winner combo has been made or not
  // run loop everytime when user clicked

  for (var i = 0; i < memberOf.length; i++) {
    var testClass = "." + memberOf[i]; // once it has been separated with memberOf, store it in testClass array.

    var items = contains("#tictactoe " + testClass, turn); // build-in function

    // winning condition: turn == N_SIZE
    if (items.length == N_SIZE) {
      return true;
    }
  }
  return false;
}

/**
 * Helper function to check if NodeList from selector has a particular text
 */
function contains(selector, XorO) {
  debugger;
  var elements = document.querySelectorAll(selector); // store which BIG ROW did user select | if select any of the first top row, will output [td.col0.row0.diagonal0, td.col0.row1, td.col0.row2.diagonal1]
  // once we store what is on the big row, run function(element)
  // below takes all of the contents in the big row box & put it in the function
  return [].filter.call(elements, function(ele) {
    return RegExp(XorO).test(ele.textContent); // takes all of the contents that is in the whole 3 cells & filter out those that are empty cell & keep the ones that are something in it | .test will return true/false.
  });
}

/**
 * Sets clicked square and also updates the turn.
 */
function actionWhenBoxClicked() {
  // `this` refer to the selected cell, since that we put set() while we create the small cells and implement it each differently
  if (this.innerHTML !== EMPTY) {
    return alert("dude tf no man"); // if the cell is not empty (has an X or O already), tell user that theres content alrd in it
  }
  this.innerHTML = turn; // load whos turn is it now (X or O)
  moves += 1; // keep track how many moves have been made
  //score[turn] += this.identifier;

  // win
  if (win(this)) {
    alert("Winner: Player " + turn); // if this current state win, print "winner is" X or O
    startNewGame(); // immediate refresh to start new game

    // draw
  } else if (moves === N_SIZE * N_SIZE) {
    alert("Draw"); // if more than 9 moves has been made, its a draw
    startNewGame(); // immediate refresh to start new game
  } else {
    // game not over yet
    //    turn = turn === "X" ? "O" : "X";
    // let turn = "X";
    if (turn === "X") {
      turn = "O"; // if now is X, change to O
    } else {
      turn = "X";
    }
    document.getElementById("turn").textContent = "Player " + turn; // print out whose the current player using .textContest = "player" + turn
  }
}

init();

// blocked score, identifier
