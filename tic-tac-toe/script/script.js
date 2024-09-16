//const readline = require("readline-sync");

function createPlayer(name, symbol) {
  return { name, symbol };
}

const gameBoard = (function () {
  const row = 3;
  const column = 3;
  const board = [];

  const getRow = () => row;
  const getColumn = () => column;

  const initializeGrid = function () {
    for (let i = 0; i < row; i++) {
      board[i] = [];
      for (let j = 0; j < column; j++) {
        board[i][j] = "";
      }
    }
  };

  const isEmpty = (row, column) => board[row][column] === "";

  const putPiece = (row, column, string) => (board[row][column] = string);

  const print = () => console.log(board);

  const checkWin = (string) => {
    // check line
    for (let i = 0; i < row; i++) {
      if (
        board[i][0] === string &&
        board[i][1] === string &&
        board[i][2] === string
      ) {
        return true;
      }
    }

    // check column
    for (let i = 0; i < column; i++) {
      if (
        board[0][i] === string &&
        board[1][i] === string &&
        board[2][i] === string
      ) {
        return true;
      }
    }

    // check first diagonal
    if (
      board[0][0] === string &&
      board[1][1] === string &&
      board[2][2] === string
    ) {
      return true;
    }

    // check second diagonal
    if (
      board[2][0] === string &&
      board[1][1] === string &&
      board[0][2] === string
    ) {
      return true;
    }
    return false;
  };
  const checkDraw = () => {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        if (board[i][j] === "") {
          return false;
        }
      }
    }

    return true;
  };
  return {
    print,
    initializeGrid,
    isEmpty,
    putPiece,
    checkWin,
    checkDraw,
    getRow,
    getColumn,
  };
})();

const displayController = (function () {
  const player1 = createPlayer("Hugo", "X");
  const player2 = createPlayer("Theo", "O");
  let playerTurn = player1;

  const getPlayerTurn = () => playerTurn;
  const changePlayerTurn = () =>
    (playerTurn = playerTurn == player1 ? player2 : player1);

  const playTurn = (row, column) => {
    gameBoard.putPiece(row, column, playerTurn.symbol);
    console.log(gameBoard.checkWin());
    if (gameBoard.checkWin(playerTurn.symbol)) {
      displayGame.displayDialog(`${playerTurn.name} won!`);
    } else if (gameBoard.checkDraw()) {
      displayGame.displayDialog("Draw");
    }
    changePlayerTurn();
  };

  const startGame = function () {
    gameBoard.initializeGrid();
    displayGame.drawGrid();
  };

  return { getPlayerTurn, changePlayerTurn, playTurn, startGame };
})();

const displayGame = (function () {
  const row = gameBoard.getRow();
  const column = gameBoard.getColumn();
  const gridDisplay = document.getElementById("gameGrid");

  const dialog = document.getElementById("dialog");
  const dialogText = document.getElementById("dialogText");
  const start = document.getElementById("restart");
  start.addEventListener("click", () => displayController.startGame());
  const closeModal = document.getElementById("closeModal");
  closeModal.addEventListener("click", () => {
    displayController.startGame();
    dialog.close();
  });
  const displayDialog = function (message) {
    dialogText.innerText = message;
    dialog.showModal();
  };
  const drawGrid = function () {
    gridDisplay.textContent = "";
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        const cellGrid = document.createElement("div");
        cellGrid.classList.add("cellGrid");
        cellGrid.setAttribute("data-row", i);
        cellGrid.setAttribute("data-column", j);

        cellGrid.addEventListener("click", () => {
          const currentRow = cellGrid.getAttribute("data-row");
          const currentColumn = cellGrid.getAttribute("data-column");
          if (gameBoard.isEmpty(currentRow, currentColumn)) {
            cellGrid.innerText = displayController.getPlayerTurn().symbol;
            displayController.playTurn(currentRow, currentColumn);
          }
        });
        gridDisplay.appendChild(cellGrid);
      }
    }
  };

  return { displayDialog, drawGrid };
})();
displayController.startGame();
