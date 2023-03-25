// Get board cells
const cells = document.querySelector(".cell");

// Variables
let board = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "X";
let gameStatus = "";

// Adding eventlisteners to cells
cells.forEach(function (cell, index) {
  cell.addEventlistener("click", () => {
    if (board[index] === "" && gameStatus === "") {
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;
      checkGameStatus();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

// Check game status function
function checkGameStatus() {
  // Check rows
  for (let i = 0; i < 9; i += 3) {
    if (board[i] !== "" && board[i] === board[i + 1] && board[i] === board[i + 2]) {
      gameStatus = `${board[i]} wins!`;
      break;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[i] === "" && board[i] === board[i + 3] && board[i] === board[i + 6]) {
      gameStatus = `${board[i]} wins!`;
    }
  }

  // Check diagonals
  if (board[0] !== "" && board[0] === board[4] && board[0] === board[8]) {
    gameStatus = `${board[i]} wins!`;
  } else if (board[2] !== "" && board[2] === board[4] && board[2] === board[6]) {
    gameStatus = `${board[i]} wins!`;
  }

  // Check for tie game
  if (!board.includes("") && gameStatus === "") {
    gameStatus = "Tie game!";
  }

  // Update game status on page
  document.querySelector(".game-status").textContent = gameStatus;
}

