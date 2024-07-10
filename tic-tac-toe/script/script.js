const gameBoard = (function () {
  const row = 3;
  const column = 3;
  const board = [];

  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < column; j++) {
      board[i][j] = "";
    }
  }

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
  return { print, isEmpty, putPiece, checkWin };
})();

gameBoard.putPiece(2, 0, "X");
gameBoard.putPiece(1, 1, "X");
gameBoard.putPiece(0, 2, "X");
gameBoard.print();
console.log(gameBoard.isEmpty(0, 0));
console.log(gameBoard.checkWin("X"));
